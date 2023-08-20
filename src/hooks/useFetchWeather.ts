import { weatherAPI } from "../services/WeatherService";
import { storage } from "../storage/storage";
import { ICityOption } from "../types";

export const useFetchWeather = (activeCity: ICityOption) => weatherAPI.useFetchWeatherDataQuery(storage.getItem('city') || activeCity)