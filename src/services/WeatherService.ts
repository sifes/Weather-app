import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { City } from './CitiesService';
import { validateCityName } from '../utils/helpers';

export const weatherAPI = createApi({
  reducerPath: 'weatherAPI',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (build) => ({
    fetchWeatherData: build.query({
      query: (city: City) => ({
        url: `?q=${validateCityName(city.address.cityName)}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
      }),
    }),
  }),
});

// lat=${cities[city].lat}&lon=${cities[city].lon}
// const cities: any = {
// 	London: {
// 		lat: 51.51,
// 		lon: -0.13,
// 	},
// 	Kyiv: {
// 		lat: 50.45,
// 		lon: 30.52,
// 	},
// 	Paris: {
// 		lat: 48.86,
// 		lon: 2.35,
// 	},
// 	Rome: {
// 		lat: 40.7,
// 		lon: -74,
// 	},
// 	Tokyo: {
// 		lat: 35.68,
// 		lon: 139.69,
// 	},
// };
