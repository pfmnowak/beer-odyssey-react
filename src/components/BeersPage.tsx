import { API_URL, ITEMS_PER_PAGE } from '../constants/constants';
import useFetchBeers from '../hooks/useFetchBeers';
import BeersList from './BeersList';
import classes from './BeersPage.module.scss';

const BeersPage = () => {
	let page = 0;

	const getURL = () => {
		const query = new URLSearchParams(location.search);
		page = parseInt(query.get('page') || '0', 10);
		if (page < 0) {
			page = 0;
		}
		const beerId = query.get('id');

		return beerId
			? `${API_URL}/${beerId}`
			: `${API_URL}?page=${page + 1}&per_page=${ITEMS_PER_PAGE}`;
	};

	const { beersList, beersCount, loading, hasError } = useFetchBeers(getURL());

	return (
		<div className={classes['beers-page']}>
			<header className={classes['beers-page__header']}>Beers</header>
			<main className={classes['beers-page__container']}>
				{loading && <p>Loading...</p>}
				{hasError && <p>Could not fetch the data. Please try again</p>}
				{!hasError && (
					<BeersList items={beersList} count={beersCount} page={page} />
					// {/* <Pagination /> */}
				)}
			</main>
		</div>
	);
};

export default BeersPage;
