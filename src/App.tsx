import classes from './App.module.scss';
import BeersPage from './components/BeersPage';

function App() {
	return (
		<div className={classes.app}>
			<BeersPage />
		</div>
	);
}

export default App;
