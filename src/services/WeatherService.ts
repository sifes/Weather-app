import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
const cities:any = {
    london: {
        lat:  51.51,
        lon:  -0.13
    },
    kyiv: {
        lat: 50.45,
        lon: 30.52
    },
    paris: {
        lat: 48.86,
        lon: 2.35
    },
    newYork: {
        lat: 40.7,
        lon: -74
    },
    tokyo: {
        lat: 35.68,
        lon: 139.69
    },
    sydney: {
        lat: 33.8,
        lon: 151.2 
    },
    
}

export const weatherAPI = createApi({
    reducerPath: 'weatherAPI',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
    endpoints: (build) => ({
        fetchWeatherData: build.query({
            query: (city)=> ({
                url: `?lat=${cities[city].lat}&lon=${cities[city].lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
            })
        })
    })
})

