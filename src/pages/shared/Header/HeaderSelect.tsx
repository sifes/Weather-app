import React from 'react'
import CreatableSelect from 'react-select/creatable';
import { GroupBase, OptionProps, StylesConfig } from 'react-select';
import { ICityOption } from '../../../types';
import { useCustomDispatch, useSelectSelector } from '../../../hooks/storeHooks';
import { handleCreate, handleInput, removeCity } from '../../../store/slices/SelectSlice';
import { storage } from '../../../storage/storage';
import useTheme from '../../../hooks/useTheme';


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
const HeaderSelect: React.FC = () => {
    const theme = useTheme();
    const { options, value } = useSelectSelector();
    const dispatch = useCustomDispatch();

    const customStyles: StylesConfig<any, boolean, GroupBase<ICityOption>> = {
        control: (base, props) => ({
            ...base,
            // minWidth: props.isFocused ? '150px' : 'none',
            backgroundColor: 'var(--default-background-day)',
            color: 'var(--default-color)',
        }),
        singleValue: (base, props) => ({
            // any because babel "cant find types for this shit"
            ...base,
            color: 'var(--default-color)',
        }),
        menu: (base, props) => ({
            ...base,
            backgroundColor: 'var(--default-background-day)',
            color: 'var(--default-color)',
            width: 'max-content',
        }),


    };
    return (
        <CreatableSelect
            onChange={(newValue) => {
                dispatch(handleInput(newValue))
                storage.setItem('city', options.find(item => item.value === newValue?.value));
            }}
            onCreateOption={(inputValue) => {
                dispatch(handleCreate(inputValue))
                storage.setItem('city', { value: inputValue, label: inputValue }
                );
            }}
            options={options}
            value={value || storage.getItem('city')}
            components={{
                Option: CustomOption,
            }}
            styles={customStyles}
        />
    )
}

export default HeaderSelect