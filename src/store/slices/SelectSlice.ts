import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SingleValue } from 'react-select';

const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ''),
});

interface IOption {
    readonly label: string;
    readonly value: string;
}

type State = {
    isLoadingSelect: boolean,
    options: IOption[]
    value: IOption | null
    activeCity: IOption;

};

const initialState: State = {
    isLoadingSelect: false,
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
            state.isLoadingSelect = true
            const newOption = createOption(action.payload);
            state.isLoadingSelect = false
            state.options.push(newOption)
            state.value = newOption;
            state.activeCity = action.payload;
        },
        handleInput: (state: State, action: PayloadAction<SingleValue<IOption>>) => {
            state.value = action.payload
            state.activeCity = state.value || { value: 'kyiv', label: 'Kyiv' };
        },
    },
});

export const { handleCreate, handleInput } = SelectSlice.actions;
export default SelectSlice.reducer;
