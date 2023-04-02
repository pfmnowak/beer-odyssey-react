import { Link } from 'react-router-dom';
import { Beer } from '../../types/types';
import classes from './BeerItem.module.scss';

type BeerItemProps = {
	item: Beer;
};

const BeerItem = ({ item }: BeerItemProps) => {
	return (
		<li className={classes['beer-item']}>
			<Link className={classes['beer-item__link']} to={`/beers/details/${item.id}`}>
				<img src={item.imageUrl} className={classes['beer-item__img']} />
				<p className={classes['beer-item__name']} title={item.name}>
					{item.name}
				</p>
				<p className={classes['beer-item__tagline']} title={item.tagline}>
					{item.tagline}
				</p>
			</Link>
		</li>
	);
};

export default BeerItem;
