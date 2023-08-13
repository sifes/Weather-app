// import { WeatherService } from '../../services/WeatherService';
import { api } from '../../axios';
import {WeatherSlice} from '../slices/WeatherSlice';
import { AppDispatch } from './../store';
import {createAsyncThunk} from '@reduxjs/toolkit';
// export const fetchWeather = (payload: string) => async (dispatch:AppDispatch) => {
//     try {
//         dispatch(WeatherSlice.actions.fetchWeather())
//         const res = await WeatherService.getWeather(payload)
//         if (res.status ===200 ) {
//             dispatch(WeatherSlice.actions.fetchWeatherSuccess(res))
//         } else {
//             dispatch(WeatherSlice.actions.fetchWeatherFail(res))
//         }
//     } catch (error) {
//      alert(error)   
//     }
// }

// export const fetchWeather = createAsyncThunk(
//     'weather/fetchAll',
//     async (_, thunkApi) => {
//         try {
//             const res = await api.get(`?lat=${51.51}&lon=${-0.13}`)
//             return res.data
//         } catch (error) {
//             return thunkApi.rejectWithValue('Error ocurred')
//         }
        
//     }
// )