import { Beers } from '../types/types';
import BeerItem from './BeerItem';
import classes from './BeersList.module.scss';

type BeersListProps = {
	items: Beers | undefined;
	count: number;
	page: number;
};

const BeersList = ({ items }: BeersListProps) => {
	return (
		<ul className={classes['beer-list']}>
			{items &&
				items.map(item => {
					return <BeerItem key={item.id} item={item} />;
				})}
		</ul>
	);
};

export default BeersList;
