import { useParams } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import { API_URL } from '../../constants/constants';
import useFetchBeers from '../../hooks/useFetchBeers';
import classes from './BeerDetailsPage.module.scss';

const BeerDetailsPage = () => {
	const params = useParams();

	const { beerId = 0 } = params;

	const { beersList, loading, hasError } = useFetchBeers(`${API_URL}/${beerId}`);

	return (
		<div className={classes['details-page']}>
			<div className={classes['details-page__container']}>
				{loading && <FadeLoader loading={loading} aria-label='Loading Spinner' />}
				{hasError && <p>Could not fetch Beer&apos;s details. Please try again</p>}
				{
					!hasError && !loading && beersList && beersList[0].name
					// <BeerDetails beerItem={beersList[0]} />
				}
			</div>
		</div>
	);
};

export default BeerDetailsPage;
