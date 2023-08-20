import React from 'react';
import DayStatistics from './components/DayStatistics';
import { useSelectSelector } from '../../hooks/storeHooks';
import { useFetchWeather } from '../../hooks/useFetchWeather';

const Statistics: React.FC = () => {
	const { activeCity } = useSelectSelector();
	const { data, isLoading } = useFetchWeather(activeCity)


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
