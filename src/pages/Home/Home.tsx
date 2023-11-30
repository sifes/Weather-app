import React from 'react';
import ThisDay from './components/thisDay/ThisDay';
import ThisDayInfo from './components/thisDayInfo/ThisDayInfo';
import Forecast from './components/forecast/Forecast';
import { useSelectSelector } from '../../hooks/storeHooks';
import { useFetchWeather } from '../../hooks/useFetchWeather';
import NotFound from '../not-found/NotFound';

const Home: React.FC = () => {
	const { activeCity } = useSelectSelector();
	const { data, isLoading, error } = useFetchWeather(activeCity)

	if (error) return <NotFound />
	if (isLoading) return <div>Loading...</div>;

	const weatherArray = data.list;
	const currentCity = data.city.name;
	const currentCountry = data.city.country;
	return (
		<>
			<div className='home-wrapper'>
				<ThisDay weather={weatherArray[0]} city={currentCity} country={currentCountry} />
				<ThisDayInfo weather={weatherArray[0]} />
			</div>
			<Forecast />
		</>
	);
};

export default Home;
