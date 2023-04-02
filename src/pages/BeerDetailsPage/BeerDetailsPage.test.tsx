import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { API_URL } from '../../constants/constants';
import { createServer } from '../../test/server';
import { beers } from '../../test/testData';
import BeerDetailsPage from './BeerDetailsPage';

function renderComponent() {
	render(
		<MemoryRouter>
			<BeerDetailsPage />
		</MemoryRouter>,
	);
}

describe('BeerDetailsPage', () => {
	describe('on data fetch', () => {
		createServer([
			{
				path: `${API_URL}/0`,
				res: beers.filter(beer => beer.id === 2),
			},
		]);

		it('displays the beer data from the API', async () => {
			renderComponent();

			const tagline = await screen.findByText(/You Know You Shouldn't/i);
			expect(tagline).toBeInTheDocument();
		});

		it('displays the Loading indicator until the data arrives', async () => {
			renderComponent();

			const loadingIndicator = await screen.findByLabelText(/loading/i);
			expect(loadingIndicator).toBeInTheDocument();

			const tagline = await screen.findByText(/You Know You Shouldn't/i);
			expect(tagline).toBeInTheDocument();
			expect(loadingIndicator).not.toBeInTheDocument();
		});

		it('does not display the Error message', async () => {
			renderComponent();

			await screen.findByText(/You Know You Shouldn't/i);

			const error = screen.queryByText(/could not fetch Beer/i);
			expect(error).not.toBeInTheDocument();
		});
	});

	describe('on data fetch error', () => {
		createServer([
			{
				path: `${API_URL}/0`,
				status: 403,
				res: {
					errorMessage: 'Not found',
				},
			},
		]);

		it('displays the Error message', async () => {
			renderComponent();

			const error = await screen.findByText(/could not fetch Beer/i);
			expect(error).toBeInTheDocument();
		});

		it('does not display the beer data', async () => {
			renderComponent();

			await screen.findByText(/could not fetch Beer/i);

			const tagline = screen.queryByRole(/You Know You Shouldn't/i);
			expect(tagline).not.toBeInTheDocument();
		});

		it('does not display the Loading indicator ', async () => {
			renderComponent();

			await screen.findByText(/could not fetch Beer/i);

			const loadingIndicator = screen.queryByLabelText(/loading/i);
			expect(loadingIndicator).not.toBeInTheDocument();
		});
	});
});
