import React from 'react';
import CreatableSelect from 'react-select/creatable';
import { GroupBase, OptionProps, OptionsOrGroups, SingleValue, StylesConfig } from 'react-select';
import { ICityOption, IOption } from '../../../types';
import { useCitiesSelector, useCustomDispatch, useCustomSelector } from '../../../hooks/storeHooks';
import { handleCreate, handleInput, removeCity } from '../../../store/slices/CitiesSlice';
import { storage } from '../../../storage/storage';
import Select from 'react-select/dist/declarations/src/Select';
import { weatherAPI } from '../../../services/WeatherService';
import { useEffect } from 'react';
import { fetchCities } from '../../../store/slices/CitiesSlice';
import { customStyles } from './HeaderSelect.styles';
import Async, { useAsync } from 'react-select/async';
import AsyncSelect from 'react-select/async';
import { City, apiFetchCities } from '../../../services/CitiesService';
const CustomOption: React.FC<OptionProps<ICityOption>> = ({ innerProps, label, data }) => {
  const dispatch = useCustomDispatch();
  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(removeCity(data!.value));
  };
  return (
    <div className='select-option' {...innerProps}>
      <span>{label}</span>
      <button onClick={handleRemove}>x</button>
    </div>
  );
};

export const HeaderSelect: React.FC = () => {
  const { options, value, cities } = useCitiesSelector();
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(fetchCities('p'));
  }, [dispatch]);

  console.log(cities);

  const promiseOptions = async (inputValue: string) => {
    const result = await dispatch(fetchCities(inputValue));
    console.log(result);
    if (result.payload) {
      const options = (result.payload as City[]).map((item) => ({
        label: item.name,
        value: item.name,
      })) as OptionsOrGroups<any, GroupBase<ICityOption>>;
      return options;
    }
    return [];
  };
  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      loadOptions={(inputValue, callback) => {
        promiseOptions(inputValue).then((options) => callback(options));
      }}
      placeholder='Select a city...'
      onChange={(newValue: SingleValue<IOption>) => {
        dispatch(handleInput(newValue));
        // storage.setItem(
        //   'city',
        //   options.find((item) => item.value === newValue?.value),
        // );
      }}
      value={value || storage.getItem('city')}
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
