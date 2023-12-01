import React from 'react';
import { useCustomDispatch } from '../../../../../hooks/storeHooks';
import { onDayClick } from '../../../../../store/slices/WeatherSlice';
import { Weather } from '../../../../../types';
import { getWeekDay, getDate } from '../../../../../utils/helpers';

export const OneDayItem: React.FC<{ weatherFullDay: Weather[] }> = ({ weatherFullDay }) => {
  const currentWeather = weatherFullDay[2];
  const dispatch = useCustomDispatch();

  return (
    <article onClick={() => dispatch(onDayClick(weatherFullDay))} className='day'>
      <div className='day-name'>{getWeekDay(currentWeather.dt_txt)}</div>
      <div className='day-date'>{getDate(currentWeather.dt_txt)}</div>
      <img
        src={`assets/images/weather/${currentWeather.weather[0].icon}.png`}
        alt={currentWeather.dt_txt}
        className='day-img'
      />
      <div className='day-tempDay'>+{currentWeather.main.temp_max.toFixed(1)}°</div>
      <div className='day-tempNight'>+{currentWeather.main.feels_like.toFixed(1)}°</div>
      <div className='day-info'>{currentWeather.weather[0].main}</div>
    </article>
  );
};