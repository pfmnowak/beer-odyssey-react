import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { API_URL } from '../constants/constants';
import { createServer } from '../test/server';
import { beers } from '../test/testData';
import BeersPage from './BeersPage';

function renderComponent() {
	render(
		<MemoryRouter>
			<BeersPage />
		</MemoryRouter>,
	);
}

describe('BeersPage', () => {
	describe('on data fetch', () => {
		createServer([
			{
				path: API_URL,
				res: beers,
			},
		]);

		it('displays the BeersList with the pagionation', async () => {
			renderComponent();

			const lists = await screen.findAllByRole('list');
			await screen.findByText(/You Know You Shouldn't/i);

			expect(lists).toHaveLength(2);
		});

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

		it('displays the header with the proper text content', async () => {
			renderComponent();

			await screen.findByText(/You Know You Shouldn't/i);

			const header = screen.getByRole('banner');
			expect(header).toHaveTextContent(/beers/i);
		});

		it('does not display the Error message', async () => {
			renderComponent();

			await screen.findByText(/You Know You Shouldn't/i);

			const error = screen.queryByText(/could not fetch the data/i);
			expect(error).not.toBeInTheDocument();
		});
	});

	describe('on data fetch error', () => {
		createServer([
			{
				path: API_URL,
				status: 403,
				res: {
					errorMessage: 'Not found',
				},
			},
		]);

		it('displays the Error message', async () => {
			renderComponent();

			const error = await screen.findByText(/could not fetch the data/i);
			expect(error).toBeInTheDocument();
		});

		it('displays the header with the proper text content', async () => {
			renderComponent();

			await screen.findByText(/could not fetch the data/i);

			const header = screen.getByRole('banner');
			expect(header).toHaveTextContent(/beers/i);
		});

		it('does not display the beer data', async () => {
			renderComponent();

			await screen.findByText(/could not fetch the data/i);

			const tagline = screen.queryByRole(/You Know You Shouldn't/i);
			expect(tagline).not.toBeInTheDocument();
		});

		it('does not display the BeersList', async () => {
			renderComponent();

			await screen.findByText(/could not fetch the data/i);

			const list = screen.queryByRole('list');
			expect(list).not.toBeInTheDocument();
		});

		it('does not display the Loading indicator ', async () => {
			renderComponent();

			await screen.findByText(/could not fetch the data/i);

			const loadingIndicator = screen.queryByLabelText(/loading/i);
			expect(loadingIndicator).not.toBeInTheDocument();
		});
	});
});
