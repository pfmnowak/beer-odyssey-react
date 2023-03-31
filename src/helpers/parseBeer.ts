import { Beer, BeerFromAPI } from '../types/types';

export const parseBeer = (item: BeerFromAPI): Beer => {
	return {
		id: item.id,
		name: item.name,
		tagline: item.tagline,
		firstBrewed: item.first_brewed,
		description: item.description,
		imageUrl: item.image_url,
		abv: item.abv,
		ibu: item.ibu,
		ingredients: item.ingredients,
		foodPairing: item.food_pairing,
		brewersTips: item.brewers_tips,
		contributedBy: item.contributed_by,
	};
};
