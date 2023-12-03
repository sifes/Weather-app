import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiFetchCities, City } from '../../services/CitiesService';
import { INITIAL_ACTIVE_CITY } from '../../utils/constants';

export const fetchCities = createAsyncThunk('weather/fetchCities', async (inputValue: string) => {
  const cities = await apiFetchCities(inputValue);
  return cities;
});

type State = {
  activeCity: City;
  cities: City[];
};

const initialState: State = {
  activeCity: INITIAL_ACTIVE_CITY,
  cities: [],
};

export const CitiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setActiveCity: (state, action: PayloadAction<City>) => {
      state.activeCity = action.payload;
    },
    setToDefaultActiveCity: (state) => {
      state.activeCity = {
        name: 'kyiv',
        address: { cityName: 'Kyiv' },
        geoCode: { latitude: 50.45, longitude: 30.52 },
      };
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

export const { setActiveCity, setToDefaultActiveCity } = CitiesSlice.actions;
export default CitiesSlice.reducer;
