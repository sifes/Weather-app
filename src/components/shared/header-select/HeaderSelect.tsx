import React from 'react';
import { GroupBase, OptionProps, OptionsOrGroups, SingleValue } from 'react-select';
import { ICityOption } from '../../../types';
import { useCustomDispatch, useCustomSelector } from '../../../hooks/storeHooks';
import { storage } from '../../../storage/storage';
import { fetchCities, setActiveCity } from '../../../store/slices/CitiesSlice';
import { customStyles } from './HeaderSelect.styles';
import AsyncSelect from 'react-select/async';
import { City } from '../../../services/CitiesService';
import { INITIAL_CITIES } from '../../../utils/constants';

const CustomOption: React.FC<OptionProps<ICityOption>> = ({ innerProps, label }) => {
  return (
    <div className='select-option' {...innerProps}>
      <span>{label}</span>
    </div>
  );
};

export const HeaderSelect: React.FC = () => {
  const dispatch = useCustomDispatch();
  const promiseOptions = async (inputValue: string) => {
    const result = await dispatch(fetchCities(inputValue));
    if (result.payload) {
      console.log(result);
      const options = (result.payload as City[]).map((item) => ({
        label: item.address.cityName[0] + item.address.cityName.slice(1, item.address.cityName.length).toLowerCase(),
        value: item.address.cityName[0] + item.address.cityName.slice(1, item.address.cityName.length).toLowerCase(),
      })) as OptionsOrGroups<any, GroupBase<ICityOption>>;
      return options;
    }
    return [];
  };
  return (
    <AsyncSelect
      cacheOptions
      defaultOptions={INITIAL_CITIES}
      loadOptions={(inputValue, callback) => {
        promiseOptions(inputValue).then((options) => callback(options));
      }}
      placeholder='Select a city...'
      onChange={(newValue: SingleValue<ICityOption>) => {
        if (newValue) {
          const value = {
            name: newValue.label,
            address: { cityName: newValue.value },
            geoCode: {
              latitude: 0,
              longitude: 0,
            },
          };
          dispatch(setActiveCity(value));
          storage.setItem('city', newValue);
        }
      }}
      value={{
        label: useCustomSelector((state) => state.CitiesSliceReducer.activeCity.name),
        value: useCustomSelector((state) => state.CitiesSliceReducer.activeCity.address.cityName),
      }}
      components={{
        Option: CustomOption,
      }}
      styles={customStyles}
    />
    // <CreatableSelect
    //   onChange={(newValue: IOption) => {
    //     dispatch(handleInput(newValue));
    //     storage.setItem(
    //       'city',
    //       options.find((item) => item.value === newValue?.value),
    //     );
    //   }}
    //   onCreateOption={(inputValue) => {
    //     dispatch(handleCreate({ label: inputValue, value: inputValue }));
    //     storage.setItem('city', { value: inputValue, label: inputValue });
    //   }}
    //   options={options}
    //   value={value || storage.getItem('city')}
    //   components={{
    //     Option: CustomOption,
    //   }}
    //   styles={customStyles}
    // />
  );
};
