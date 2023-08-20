import { Weather } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
	isDaysShown: boolean;
	activeDay: Weather[];
	isDetailedDayShown: boolean;
};

const initialState: State = {
	isDaysShown: true,
	activeDay: [],
	isDetailedDayShown: false,
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

	},
});

export const { onTabsClick, onDayClick, onCancelClick } = WeatherSlice.actions;
export default WeatherSlice.reducer;
