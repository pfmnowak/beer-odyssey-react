import { render, screen } from '@testing-library/react';
import BeersPage from './BeersPage';

describe('BeersPage', () => {
	it('displays the header with the proper text content', () => {
		render(<BeersPage />);
		const header = screen.getByRole('banner');
		expect(header).toHaveTextContent(/beers/i);
	});
});
