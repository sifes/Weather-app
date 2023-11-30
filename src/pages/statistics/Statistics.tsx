import React from 'react';
import DayStatistics from '../../components/statistics/DayStatistics';
import { useSelectSelector } from '../../hooks/storeHooks';
import { useFetchWeather } from '../../hooks/useFetchWeather';
import NotFound from '../not-found/NotFound';

const Statistics: React.FC = () => {
  const { activeCity } = useSelectSelector();
  const { data, isLoading, error } = useFetchWeather(activeCity);

  if (error) return <NotFound />;
  if (isLoading) return <div>Loading...</div>;

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
