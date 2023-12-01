import { Weather } from '../types';

export function getDaysInfo(weather: Weather) {
  return [
    {
      img: 'assets/images/thermometer.svg',
      label: 'Temperature',
      info: `${Math.round(weather.main.temp)}° - feel like ${Math.round(weather.main.feels_like)}°`,
    },
    {
      img: 'assets/images/pressure.svg',
      label: 'Pressure',
      info: `${weather.main.pressure} Precipitation in liquid equivalent, mm`,
    },
    {
      img: 'assets/images/evaporator.svg',
      label: 'Forecast',
      info: `Weather today: ${weather.weather[0].description}`,
    },
    {
      img: 'assets/images/wind.svg',
      label: 'Wind',
      info: `${weather.wind.speed} Wind gusts, m/s`,
    },
  ];
}
