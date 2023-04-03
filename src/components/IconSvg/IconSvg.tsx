import Icons from '../../icons/sprite.svg';

type IconSvgProps = {
	className?: string;
	name: string;
};

const IconSvg = ({ className, name }: IconSvgProps) => (
	<svg className={className}>
		<use xlinkHref={`${Icons}#${name}`} />
	</svg>
);

export default IconSvg;
