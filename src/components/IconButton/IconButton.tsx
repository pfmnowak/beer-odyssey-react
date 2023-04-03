import IconSvg from '../IconSvg/IconSvg';
import classes from './IconButton.module.scss';

type IconButtonProps = {
	onClick?: () => void;
	name: string;
};

const IconButton = ({ onClick, name }: IconButtonProps) => {
	return (
		<button className={classes['icon-btn']} onClick={onClick}>
			<IconSvg className={classes['icon-btn__icon']} name={name} />
		</button>
	);
};

export default IconButton;
