import React from 'react';
import { useSelectSelector } from '../../hooks/storeHooks';
import { useFetchWeather } from '../../hooks/useFetchWeather';
import NotFound from '../not-found/NotFound';
import ThisDay from '../../components/home/this-day/ThisDay';
import Forecast from '../../components/home/forecast/Forecast';
import ThisDayInfo from '../../components/home/this-day-info/ThisDayInfo';

const Home: React.FC = () => {
  const { activeCity } = useSelectSelector();
  const { data, isLoading, error } = useFetchWeather(activeCity);

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

export default Home;
