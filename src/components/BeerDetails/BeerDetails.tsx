import { useNavigate } from 'react-router-dom';
import { Beer } from '../../types/types';
import IconButton from '../IconButton/IconButton';
import classes from './BeerDetails.module.scss';

type BeerDetailsProps = {
	beerItem: Beer;
};

const BeerDetails = ({ beerItem }: BeerDetailsProps) => {
	const navigate = useNavigate();

	return (
		<div className={classes.beer}>
			<div className={classes['beer__header']}>
				<div className={classes['beer__icon']}>
					<IconButton onClick={() => navigate(-1)} name='icon-chevron-left1' />
				</div>
				<div className={classes['beer__img-container']}>
					<img src={beerItem.imageUrl} className={classes['beer__img']} />
				</div>

				<div className={classes['beer__main-info']}>
					<p className={classes['beer__name']} title={beerItem.name}>
						{beerItem.name}
					</p>
					<p className={classes['beer__tagline']} title={beerItem.tagline}>
						{beerItem.tagline}
					</p>

					<div className={classes['beer__parameters']}>
						<div className={classes['beer__abv']}>
							<p className={classes['beer__abv-label']}>abv</p>
							<p className={classes['beer__abv-value']}>{beerItem.abv ? beerItem.abv : '-'}</p>
						</div>
						<div className={classes['beer__ibu']}>
							<p className={classes['beer__ibu-label']}>ibu</p>
							<p className={classes['beer__ibu-value']}>{beerItem.ibu ? beerItem.ibu : '-'}</p>
						</div>
					</div>
				</div>
			</div>
			<div className={classes['beer__info']}>
				<p className={classes['beer__description']} title={beerItem.description}>
					{beerItem.description}
				</p>
				{/* ingredients */}
			</div>
		</div>
	);
};

export default BeerDetails;
