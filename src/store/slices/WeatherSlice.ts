import { Main, WeatherInWeather, Wind } from './../../types/index';
import { AxiosResponse } from 'axios';
import { Weather } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { fetchWeather } from '../thunks/fetchWeather';

type State = {
	isDaysShown: boolean,
	activeDay: Weather[]
	isDetailedDayShown: boolean
};

const initialState: State = {
	isDaysShown: true,
	activeDay: [],
	isDetailedDayShown: false
};

export const WeatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		onTabsClick(state, action) {
			switch (action.payload.id) {
				case 0:
					state.isDaysShown= false
					state.isDetailedDayShown= true
					state.activeDay = action.payload.activeDay
					break;
				case 1:
					state.isDaysShown= false
					state.isDetailedDayShown= true
					state.activeDay = action.payload.activeDay
				break;
				case 2:
					state.isDaysShown= true
					state.isDetailedDayShown= true
					state.activeDay = action.payload.activeDay
				break;
				default:
					break;
			}
		},
		onDayClick(state, action) {
			state.isDetailedDayShown= true
			state.activeDay = action.payload
		},
		onCancelClick(state) {
			state.isDaysShown= true
			state.isDetailedDayShown = false
		}
	},
	// extraReducers: {
	// 	[fetchWeather.fulfilled.type]: (state: State, action: PayloadAction<AxiosResponse<Weather>>) => {
	// 		state.weather = action.payload.data;
	// 		state.isLoading = false;
	// 		state.response = {
	// 			status: action.payload.status,
	// 			message: action.payload.statusText,
	// 		};
	// 	},
    //     [fetchWeather.pending.type]: (state: State) => {
	// 		state.isLoading = true;
	// 	},
    //     [fetchWeather.rejected.type]: (state: State, action: PayloadAction<AxiosResponse<Weather>>) => {
	// 		state.isLoading = false;
	// 		state.response = {
	// 			status: action.payload.status,
	// 			message: action.payload.statusText,
	// 		};
	// 	},
	// },
});

export const {onTabsClick,onDayClick,onCancelClick} = WeatherSlice.actions;

export default WeatherSlice.reducer;
