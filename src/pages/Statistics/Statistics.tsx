import React from 'react';
import DayStatistics from './components/DayStatistics';
import { useCustomSelector } from '../../hooks/storeHooks';
import { weatherAPI } from '../../services/WeatherService';
import { storage } from '../../storage/storage';

const Statistics: React.FC = () => {
	const { activeCity } = useCustomSelector(state => state.WeatherSliceReducer);
	const { data, isLoading } = weatherAPI.useFetchWeatherDataQuery(activeCity);
	if (isLoading) {
		return <div>Loading...</div>;
	}
	const weatherArray = data.list;
	const currentCity = data.city.name;
	return (
		<div className='Statistics'>
			<DayStatistics weather={[...weatherArray].slice(0, 8)} />
		</div>
	);
};

export default Statistics;
