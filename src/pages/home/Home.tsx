import React from 'react';
import { useCitiesSelector } from '../../hooks/storeHooks';
import { useFetchWeather } from '../../hooks/useFetchWeather';
import { Forecast } from '../../components/home/forecast/Forecast';
import { ThisDayInfo } from '../../components/home/this-day-info/ThisDayInfo';
import { ThisDay } from '../../components/home/this-day/ThisDay';
import { NotFound } from '../Not-found/NotFound';

export const Home: React.FC = () => {
  const { activeCity } = useCitiesSelector();
  const { data, isLoading, error, refetch } = useFetchWeather(activeCity);

  React.useEffect(() => {
    refetch();
  }, [activeCity]);

  if (error) return <NotFound />;
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