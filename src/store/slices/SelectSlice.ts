import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SingleValue } from 'react-select';
import { createOption } from '../../utils';
import { IOption } from '../../types';

type State = {
    options: IOption[]
    value: IOption | null
    activeCity: IOption;
};

const initialState: State = {
    options: [
        createOption('London'),
        createOption('Kyiv'),
        createOption('Rome')
    ],
    value: null,
    activeCity: { value: 'kyiv', label: 'Kyiv' },
}


export const SelectSlice = createSlice({
    name: 'select',
    initialState,
    reducers: {
        handleCreate: (state: State, action) => {
            const newOption = createOption(action.payload);
            state.options.push(newOption)
            state.value = newOption;
            state.activeCity = action.payload;
        },
        handleInput: (state: State, action: PayloadAction<SingleValue<IOption>>) => {
            state.value = action.payload
            state.activeCity = state.value || { value: 'kyiv', label: 'Kyiv' };
        },
        handleCancel: (state: State, action: PayloadAction<SingleValue<IOption>>) => {
            state.options = state.options.filter(option => option.value !== action.payload?.value)
            state.value = { value: 'kyiv', label: 'Kyiv' }
            state.activeCity = { value: 'kyiv', label: 'Kyiv' };
        },
        removeCity: (state: State, action: PayloadAction<string>) => {
            const cityToRemove = action.payload;
            state.options = state.options.filter(option => option.value !== cityToRemove);
        }

    },
});

export const { handleCreate, handleInput, handleCancel, removeCity } = SelectSlice.actions;
export default SelectSlice.reducer;