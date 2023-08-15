import { Main, WeatherInWeather, Wind } from './../../types/index';
import { AxiosResponse } from 'axios';
import { Weather } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { fetchWeather } from '../thunks/fetchWeather';

type State = {
	isDaysShown: boolean,
	activeDay: Weather[]
	isDetailedDayShown: boolean
	activeCity: string
};

const initialState: State = {
	isDaysShown: true,
	activeDay: [],
	isDetailedDayShown: false,
	activeCity: 'london'
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
		},
		onSelectClick(state,action) {
			state.activeCity = action.payload
		}
	},
});

export const {onTabsClick,onDayClick,onCancelClick,onSelectClick} = WeatherSlice.actions;

export default WeatherSlice.reducer;
