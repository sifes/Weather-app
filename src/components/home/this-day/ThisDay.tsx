import React from 'react';
import { Weather } from '../../../types';

interface Props {
  weather: Weather;
  city: string;
  country: string;
}

const ThisDay: React.FC<Props> = ({ weather, city, country }) => {
  return (
    <div className='thisDay'>
      <div className='thisDay-header'>
        <div className='thisDay-info'>
          <span>{Math.round(weather.main.temp)}°</span>
          <p>Today</p>
        </div>
        <img src={`assets/images/weather/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
      </div>
      <div className='thisDay-time'>
        Time: <span>{weather.dt_txt.slice(11, 16)}</span>
      </div>
      <div className='thisDay-city'>
        <span>
          {city}, {country}{' '}
        </span>
      </div>
    </div>
  );
};

export default ThisDay;
