import WeatherSliceReducer from './slices/WeatherSlice';
import { weatherAPI } from '../services/WeatherService';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	WeatherSliceReducer,
	[weatherAPI.reducerPath]: weatherAPI.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(weatherAPI.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
