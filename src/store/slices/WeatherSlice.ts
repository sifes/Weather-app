import { CITIES } from './../../types/index';
import { Weather } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
	isDaysShown: boolean;
	activeDay: Weather[];
	isDetailedDayShown: boolean;
	activeCity: string;
};

const initialState: State = {
	isDaysShown: true,
	activeDay: [],
	isDetailedDayShown: false,
	activeCity: CITIES.LONDON,
};

export const WeatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		onTabsClick(state: State, action: PayloadAction<{ id: number; activeDay: any }>) {
			switch (action.payload.id) {
				case 0:
					state.isDaysShown = false;
					state.isDetailedDayShown = true;
					state.activeDay = action.payload.activeDay;
					break;
				case 1:
					state.isDaysShown = false;
					state.isDetailedDayShown = true;
					state.activeDay = action.payload.activeDay;
					break;
				case 2:
					state.isDaysShown = true;
					state.isDetailedDayShown = true;
					state.activeDay = action.payload.activeDay;
					break;
				default:
					break;
			}
		},
		onDayClick(state: State, action: PayloadAction<Weather[]>) {
			state.isDetailedDayShown = true;
			state.activeDay = action.payload;
		},
		onCancelClick(state: State) {
			state.isDaysShown = true;
			state.isDetailedDayShown = false;
		},
		onSelectClick(state: State, action: PayloadAction<string>) {
			state.activeCity = action.payload;
		},
	},
});

export const { onTabsClick, onDayClick, onCancelClick, onSelectClick } = WeatherSlice.actions;

export default WeatherSlice.reducer;
