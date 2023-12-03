import { City } from '../services/CitiesService';
import { weatherAPI } from '../services/WeatherService';

export const useFetchWeather = (activeCity: City) => {
  return weatherAPI.useFetchWeatherDataQuery(activeCity);
};
