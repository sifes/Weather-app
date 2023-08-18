import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
const cities: any = {
	London: {
		lat: 51.51,
		lon: -0.13,
	},
	Kyiv: {
		lat: 50.45,
		lon: 30.52,
	},
	Paris: {
		lat: 48.86,
		lon: 2.35,
	},
	Rome: {
		lat: 40.7,
		lon: -74,
	},
	Tokyo: {
		lat: 35.68,
		lon: 139.69,
	},
}; // keys can be enum ???

export const weatherAPI = createApi({
	reducerPath: 'weatherAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/forecast' }),
	endpoints: build => ({
		fetchWeatherData: build.query({
			query: city => ({
				url: `?lat=${cities[city].lat}&lon=${cities[city].lon}&appid=${'461dd59455d209a25fdb42671478b32f'}&units=metric`,
			}),
		}),
	}),
});
// key openWeather = '461dd59455d209a25fdb42671478b32f'    ///// was in env.local