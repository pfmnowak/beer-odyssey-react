import { useLocation, useNavigate } from 'react-router-dom';
import { API_URL, ITEMS_PER_PAGE, TOTAL_COUNT } from '../constants/constants';
import useFetchBeers from '../hooks/useFetchBeers';
import BeersList from './BeersList';
import classes from './BeersPage.module.scss';
import Pagination from './Pagination';

const BeersPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	let currentPage = 0;

	const getRequestURL = () => {
		const query = new URLSearchParams(location.search);

		currentPage = parseInt(query.get('page') || '0', 10);
		if (currentPage < 0 || currentPage >= TOTAL_COUNT / ITEMS_PER_PAGE) {
			currentPage = 0;
		}
		const beerId = query.get('id');

		return beerId
			? `${API_URL}/${beerId}`
			: `${API_URL}?page=${currentPage + 1}&per_page=${ITEMS_PER_PAGE}`;
	};

	const { beersList, beersCount, loading, hasError } = useFetchBeers(getRequestURL());

	const handlePageChange = (newPage: number) => {
		navigate(`?page=${newPage - 1}`);
	};

	return (
		<div className={classes['beers-page']}>
			<header className={classes['beers-page__header']}>Beers</header>
			<main className={classes['beers-page__container']}>
				{loading && <p>Loading...</p>}
				{hasError && <p>Could not fetch the data. Please try again</p>}
				{!hasError && (
					<>
						<BeersList items={beersList} count={beersCount} page={currentPage} />
						<Pagination
							currentPage={currentPage + 1}
							totalCount={TOTAL_COUNT}
							pageSize={ITEMS_PER_PAGE}
							onPageChange={page => handlePageChange(page)}
						/>
					</>
				)}
			</main>
		</div>
	);
};

export default BeersPage;
