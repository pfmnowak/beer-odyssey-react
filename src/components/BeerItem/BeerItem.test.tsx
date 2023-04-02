import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { fakeBeer } from '../../test/testData';
import BeerItem from './BeerItem';

function renderComponent() {
	render(
		<MemoryRouter>
			<BeerItem item={fakeBeer} />
		</MemoryRouter>,
	);
}

describe('BeerItem component', () => {
	it('displays the link to the details page', async () => {
		renderComponent();

		const link = await screen.findByRole('link');

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', `/beers/details/${fakeBeer.id}`);
	});

	it('displays the correct name of the beer', () => {
		renderComponent();

		const name = screen.getByText(/trashy blonde/i);
		expect(name).toBeInTheDocument();
	});

	it('displays the correct tagline of the beer', () => {
		renderComponent();

		const tagline = screen.getByText(/You Know You Shouldn't/i);
		expect(tagline).toBeInTheDocument();
	});

	it('displays the correct image of the beer', () => {
		renderComponent();

		const image = screen.getByRole('img');
		expect(image).toHaveAttribute('src', 'https://images.punkapi.com/v2/2.png');
	});
});
