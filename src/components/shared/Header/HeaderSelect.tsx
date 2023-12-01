import React from 'react';
import CreatableSelect from 'react-select/creatable';
import { GroupBase, OptionProps, StylesConfig } from 'react-select';
import { ICityOption } from '../../../types';
import { useCustomDispatch, useSelectSelector } from '../../../hooks/storeHooks';
import { handleCreate, handleInput, removeCity } from '../../../store/slices/SelectSlice';
import { storage } from '../../../storage/storage';

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
  const { options, value } = useSelectSelector();
  const dispatch = useCustomDispatch();

  const customStyles: StylesConfig<any, boolean, GroupBase<ICityOption>> = {
    control: (base) => ({
      ...base,
      backgroundColor: 'var(--default-background-day)',
      color: 'var(--default-color)',
    }),
    singleValue: (base) => ({
      ...base,
      color: 'var(--default-color)',
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: 'var(--default-background-day)',
      color: 'var(--default-color)',
      width: 'max-content',
    }),
    input: (base) => ({
      ...base,
      color: 'var(--default-color)',
    }),
  };
  return (
    <CreatableSelect
      onChange={(newValue) => {
        dispatch(handleInput(newValue));
        storage.setItem(
          'city',
          options.find((item) => item.value === newValue?.value),
        );
      }}
      onCreateOption={(inputValue) => {
        dispatch(handleCreate({ label: inputValue, value: inputValue }));
        storage.setItem('city', { value: inputValue, label: inputValue });
      }}
      options={options}
      value={value || storage.getItem('city')}
      components={{
        Option: CustomOption,
      }}
      styles={customStyles}
    />
  );
};