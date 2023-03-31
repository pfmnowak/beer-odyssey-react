import { beers } from '../data';
import { Beer } from '../types/types';
import BeersList from './BeersList';
import classes from './BeersPage.module.scss';

const BeersPage = () => {
	const camelCaseBeers: Beer[] = beers.map(item => {
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
	});

	return (
		<div className={classes['beers-page']}>
			<header className={classes['beers-page__header']}>Beers</header>
			<main className={classes['beers-page__container']}>
				<BeersList items={camelCaseBeers} />
				{/* <Pagination /> */}
			</main>
		</div>
	);
};

export default BeersPage;
