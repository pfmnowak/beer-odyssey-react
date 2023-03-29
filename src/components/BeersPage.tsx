import classes from './BeersPage.module.scss';

const BeersPage = () => {
	return (
		<div className={classes['beers-page']}>
			<header className={classes['beers-page__header']}>Beers</header>
			<main className={classes['beers-page__container']}>
				{/* <BeersList */}
				{/* <Pagination /> */}
			</main>
		</div>
	);
};

export default BeersPage;
