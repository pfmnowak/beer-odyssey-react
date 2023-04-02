import { render, screen } from '@testing-library/react';
import { Beer } from '../../types/types';
import BeerDetails from './BeerDetails';

function renderComponent() {
	const fakeBeer: Beer = {
		id: 2,
		name: 'Trashy Blonde',
		tagline: "You Know You Shouldn't",
		firstBrewed: '04/2008',
		description:
			'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
		imageUrl: 'https://images.punkapi.com/v2/2.png',
		abv: 4.1,
		ibu: 41.5,
		ingredients: {
			malt: [
				{
					name: 'Maris Otter Extra Pale',
					amount: {
						value: 3.25,
						unit: 'kilograms',
					},
				},
			],
			hops: [
				{
					name: 'Amarillo',
					amount: {
						value: 13.8,
						unit: 'grams',
					},
					add: 'start',
					attribute: 'bitter',
				},
			],
			yeast: 'Wyeast 1056 - American Ale™',
		},
		foodPairing: ['Fresh crab with lemon', 'Garlic butter dipping sauce'],
		brewersTips:
			'Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort.',
		contributedBy: 'Sam Mason <samjbmason>',
	};

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
