import React from 'react';
import { DayStatistics } from '../../components/statistics/DayStatistics';
import { useCitiesSelector } from '../../hooks/storeHooks';
import { useFetchWeather } from '../../hooks/useFetchWeather';
import { NotFound } from '../not-found/NotFound';

export const Statistics: React.FC = () => {
  const { activeCity } = useCitiesSelector();
  const { data, isLoading, error, refetch } = useFetchWeather(activeCity);

  React.useEffect(() => {
    refetch();
  }, [activeCity]);

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