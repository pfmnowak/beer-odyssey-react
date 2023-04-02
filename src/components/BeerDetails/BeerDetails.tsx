import { Beer } from '../../types/types';
import classes from './BeerDetails.module.scss';

type BeerDetailsProps = {
	beerItem: Beer;
};

const BeerDetails = ({ beerItem }: BeerDetailsProps) => {
	return (
		<div className={classes.beer}>
			<div className={classes['beer__img-container']}>
				<img src={beerItem.imageUrl} className={classes['beer__img']} />
			</div>
			<div className={classes['beer__info']}>
				<p className={classes['beer__name']} title={beerItem.name}>
					{beerItem.name}
				</p>
				<p className={classes['beer__id']}>#{beerItem.id}</p>
				<p className={classes['beer__tagline']} title={beerItem.tagline}>
					{beerItem.tagline}
				</p>
				<p className={classes['beer__description']} title={beerItem.description}>
					{beerItem.description}
				</p>
				<p className={classes['beer__abv-label']}>abv</p>
				<p className={classes['beer__abv']}>{beerItem.abv}</p>
				<p className={classes['beer__ibu-label']}>ibu</p>
				<p className={classes['beer__ibu']}>{beerItem.ibu}</p>
				{/* ingredients */}
			</div>
		</div>
	);
};

export default BeerDetails;
