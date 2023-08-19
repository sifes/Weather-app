import React from 'react';
import ThisDay from './components/ThisDay';
import ThisDayInfo from './components/ThisDayInfo';
import Forecast from './components/Forecast/Forecast';
import { useWeatherSelector } from '../../hooks/storeHooks';
import { weatherAPI } from '../../services/WeatherService';
import { storage } from '../../storage/storage';

const Home: React.FC = () => {
	const { activeCity } = useWeatherSelector()
	const { data, isLoading } = weatherAPI.useFetchWeatherDataQuery(activeCity);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const weatherArray = data.list;
	const currentCity = data.city.name;
	return (
		<>
			<div className='home-wrapper'>
				<ThisDay weather={storage.getItem('currentWeather') ? storage.getItem('currentWeather') : weatherArray[0]} city={storage.getItem('city') ? storage.getItem('city').label : currentCity} />
				<ThisDayInfo weather={storage.getItem('currentWeather') ? storage.getItem('currentWeather') : weatherArray[0]} />
			</div>
			<Forecast />
		</>
	);
};

export default Home;
