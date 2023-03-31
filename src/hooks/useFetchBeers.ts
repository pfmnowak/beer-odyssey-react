import axios from 'axios';
import { useEffect, useState } from 'react';
import { parseBeer } from '../helpers/parseBeer';
import { BeerFromAPI, Beers } from '../types/types';

const useFetchBeers = (url: string) => {
	const [beersList, setBeersList] = useState<Beers | undefined>(undefined);
	const [beersCount, setBeersCount] = useState(0);
	const [loading, setLoading] = useState(false);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			try {
				const { data } = await axios.get(url);
				setLoading(false);
				setHasError(false);
				if (data.length) {
					const parsedBeers = data.map((item: BeerFromAPI) => parseBeer(item));
					setBeersList(parsedBeers);
					setBeersCount(data.length);
				} else {
					setHasError(true);
				}
			} catch (error) {
				setLoading(false);
				setHasError(true);
			}
		};
		getData();
	}, [url]);

	return { beersList, beersCount, loading, hasError };
};

export default useFetchBeers;
