import { ReactNode } from 'react';
import { Beer } from '../types/types';
import BeerItem from './BeerItem';
import classes from './BeersList.module.scss';

type BeersListProps = {
	items: Beer[];
	children?: ReactNode;
};

const BeersList = ({ items }: BeersListProps) => {
	return (
		<ul className={classes['beer-list']}>
			{items.map(item => {
				return <BeerItem key={item.id} item={item} />;
			})}
		</ul>
	);
};

export default BeersList;
