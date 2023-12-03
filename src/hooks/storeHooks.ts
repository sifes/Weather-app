import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { useSelector } from 'react-redux';

export const useCustomDispatch = () => useDispatch<AppDispatch>();
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useWeatherSelector = () => {
  return useCustomSelector((state) => state.WeatherSliceReducer);
};
export const useCitiesSelector = () => {
  return useCustomSelector((state) => state.CitiesSliceReducer);
};
