/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DOTS, usePagination } from '../hooks/usePagination';
import classes from './Pagination.module.scss';

type PaginationProps = {
	onPageChange: (page: number) => void;
	totalCount: number;
	siblingCount?: number;
	currentPage: number;
	pageSize: number;
};

const Pagination = ({
	onPageChange,
	totalCount,
	siblingCount = 1,
	currentPage,
	pageSize,
}: PaginationProps) => {
	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	if (currentPage < 0 || paginationRange!.length < 2) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	const lastPage = paginationRange![paginationRange!.length - 1];
	return (
		<ul className={classes.pagination}>
			<li
				className={`${classes['pagination__item']} ${classes['pagination__item--arrow']} ${
					currentPage === 1 ? classes.disabled : ''
				}`}
				onClick={onPrevious}
			>
				<div className={`${classes.arrow} ${classes.left}`} />
			</li>
			{paginationRange!.map((pageNumber, index) => {
				if (pageNumber === DOTS) {
					return (
						<li
							key={`${index}_${pageNumber}`}
							className={`${classes['pagination__item']} ${classes.dots}`}
						>
							&#8230;
						</li>
					);
				}
				return (
					<li
						key={`${index}_${pageNumber}`}
						className={`${classes['pagination__item']} ${
							pageNumber === currentPage ? classes.selected : ''
						}`}
						onClick={() => onPageChange(pageNumber)}
					>
						{pageNumber}
					</li>
				);
			})}
			<li
				className={`${classes['pagination__item']} ${classes['pagination__item--arrow']} ${
					currentPage === lastPage ? classes.disabled : ''
				}`}
				onClick={onNext}
			>
				<div className={`${classes.arrow} ${classes.right}`} />
			</li>
		</ul>
	);
};

export default Pagination;
