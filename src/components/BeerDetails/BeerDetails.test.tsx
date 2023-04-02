import { render, screen } from '@testing-library/react';
import { fakeBeer } from '../../test/testData';
import BeerDetails from './BeerDetails';

function renderComponent() {
	render(<BeerDetails beerItem={fakeBeer} />);
}

describe('BeerDetails component', () => {
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

	it('displays the correct description of the beer', () => {
		renderComponent();

		const description = screen.getByText(/A titillating, neurotic, peroxide punk of a Pale Ale/i);
		expect(description).toBeInTheDocument();
	});

	it('displays the correct abv value of the beer', () => {
		renderComponent();

		const abv = screen.getByText(/4.1/i);
		expect(abv).toBeInTheDocument();
	});

	it('displays the correct ibu value of the beer', () => {
		renderComponent();

		const ibu = screen.getByText(/41.5/i);
		expect(ibu).toBeInTheDocument();
	});

	// it('displays the correct ingredients of the beer', () => {
	// 	renderComponent();

	// 	const maltName = screen.getByText(/Maris Otter Extra Pale/i);
	// 	expect(maltName).toBeInTheDocument();
	// });
});
