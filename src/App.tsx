import { Navigate, Route, Routes } from 'react-router-dom';
import classes from './App.module.scss';
import BeerDetailsPage from './pages/BeerDetailsPage/BeerDetailsPage';
import BeersPage from './pages/BeersPage/BeersPage';
import NotFound from './pages/NotFound/NotFound';

function App() {
	return (
		<div className={classes.app}>
			<Routes>
				<Route path='/' element={<Navigate to='/beers' replace />} />
				<Route path='/beers' element={<BeersPage />} />
				<Route path='/beers/details/:beerId' element={<BeerDetailsPage />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
