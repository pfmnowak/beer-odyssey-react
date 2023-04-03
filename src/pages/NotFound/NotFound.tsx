import { NavLink, useNavigate } from 'react-router-dom';
import IconButton from '../../components/IconButton/IconButton';
import classes from './NotFound.module.scss';

const NotFound = () => {
	const navigate = useNavigate();

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
			<div className={classes['not-found__actions']}>
				<IconButton onClick={() => navigate(-1)} name='icon-chevron-left1' />
				<NavLink to='/'>
					<IconButton name='icon-home' />
				</NavLink>
			</div>
		</div>
	);
};

export default NotFound;
