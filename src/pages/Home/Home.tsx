import React from 'react';
import ThisDay from './components/ThisDay';
import ThisDayInfo from './components/ThisDayInfo';
import Forecast from './components/Forecast/Forecast';
import { useSelectSelector } from '../../hooks/storeHooks';
import { useFetchWeather } from '../../hooks/useFetchWeather';
import NotFound from '../NotFound';

const Home: React.FC = () => {
	const { activeCity } = useSelectSelector();
	const { data, isLoading, error } = useFetchWeather(activeCity)

	if (error) {
		return <NotFound />
	}
	if (isLoading) {
		return <div>Loading...</div>;
	}

	const weatherArray = data.list;
	const currentCity = data.city.name;
	return (
		<>
			<div className='home-wrapper'>
				<ThisDay weather={weatherArray[0]} city={currentCity} />
				<ThisDayInfo weather={weatherArray[0]} />
			</div>
			<Forecast />
		</>
	);
};

export default Home;
