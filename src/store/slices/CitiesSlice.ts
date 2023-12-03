import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SingleValue } from 'react-select';
import { createOption } from '../../utils/helpers';
import { IOption } from '../../types';
import { apiFetchCities, City } from '../../services/CitiesService';

export const fetchCities = createAsyncThunk('weather/fetchCities', async (inputValue: string) => {
  const cities = await apiFetchCities(inputValue);
  return cities;
});

type State = {
  options: IOption[];
  value: IOption | null;
  activeCity: IOption;
  cities: City[];
};

const initialState: State = {
  options: [createOption('London'), createOption('Kyiv'), createOption('Rome')],
  value: null,
  activeCity: { value: 'kyiv', label: 'Kyiv' },
  cities: [],
};

export const CitiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    handleCreate: (state: State, action: PayloadAction<IOption>) => {
      const newOption = createOption(action.payload.label);
      state.options.push(newOption);
      state.value = newOption;
      state.activeCity = action.payload;
    },
    handleInput: (state: State, action: PayloadAction<SingleValue<IOption>>) => {
      state.value = action.payload;
      state.activeCity = state.value || { value: 'kyiv', label: 'Kyiv' };
    },
    handleCancel: (state: State, action: PayloadAction<SingleValue<IOption>>) => {
      state.options = state.options.filter((option) => option.value !== action.payload?.value);
      state.value = { value: 'kyiv', label: 'Kyiv' };
      state.activeCity = { value: 'kyiv', label: 'Kyiv' };
    },
    removeCity: (state: State, action: PayloadAction<string>) => {
      const cityToRemove = action.payload;
      state.options = state.options.filter((option) => option.value !== cityToRemove);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      if (action.payload.length) {
        state.cities = action.payload.map((value) => ({
          name: value.name,
          address: {
            cityName:
              value.address.cityName[0] + value.address.cityName.slice(1, value.address.cityName.length).toLowerCase(),
          },
          geoCode: { latitude: +value.geoCode.latitude.toFixed(2), longitude: +value.geoCode.longitude.toFixed(2) },
        }));
      }
    });
  },
});

export const { handleCreate, handleInput, handleCancel, removeCity } = CitiesSlice.actions;
export default CitiesSlice.reducer;
