import { NavLink } from 'react-router-dom';
import classes from './NotFound.module.scss';

const NotFound = () => {
	return (
		<div className={classes['not-found']}>
			<div className={classes['not-found__img-container']}>
				<img
					className={classes['not-found__img']}
					alt='The 404 error image'
					src={require('./../../img/404.jpg')}
				/>
			</div>
			<p>
				Image by{' '}
				<a href='https://www.freepik.com/free-vector/cute-beer-bottle-character-different-poses_10385727.htm#query=404%20beer&position=3&from_view=search&track=ais'>
					upklyak
				</a>{' '}
				on Freepik
			</p>
			<p className={classes['not-found__text']}>
				The beer that you are looking for apparently does not exist.
			</p>
			<NavLink to='/' className={classes['not-found__btn']}>
				Take me home
			</NavLink>
		</div>
	);
};

export default NotFound;
