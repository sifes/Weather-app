import React from 'react';
import DayStatistics from './components/DayStatistics';
import { useCustomSelector } from '../../hooks/storeHooks';
import { weatherAPI } from '../../services/WeatherService';

const Statistics: React.FC = () => {
	const { activeCity } = useCustomSelector(state => state.WeatherSliceReducer);
	const { data, isLoading } = weatherAPI.useFetchWeatherDataQuery(activeCity);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const weatherArray = data.list;

	return (
		<>
			<DayStatistics weather={[...weatherArray].slice(0, 8)} />
			<DayStatistics weather={[...weatherArray].slice(8, 16)} />
			<DayStatistics weather={[...weatherArray].slice(16, 24)} />
			<DayStatistics weather={[...weatherArray].slice(24, 32)} />
			<DayStatistics weather={[...weatherArray].slice(32, 40)} />
		</>
	);
};

export default Statistics;
