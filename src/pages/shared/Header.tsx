import React from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import useTheme from '../../hooks/useTheme';
import { useCustomDispatch, useSelectSelector } from '../../hooks/storeHooks';
import { storage } from '../../storage/storage';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../router';
import { handleCreate, handleInput } from '../../store/slices/SelectSlice';

const Header: React.FC = () => {
	const { isLoadingSelect, options, value } = useSelectSelector();
	const dispatch = useCustomDispatch();
	const theme = useTheme();

	const colorStyles = {
		control: (styles: any, state: any) => ({
			...styles,
			height: '37px',
			backgroundColor: theme.theme === 'light' ? '#4793FF33' : '#4F4F4F',
			borderRadius: '10px',
			width: state.isFocused ? '200px' : 'auto',
		}),
		singleValue: (styles: any) => ({
			// any because babel "cant find types for this shit"
			...styles,
			color: theme.theme === 'light' ? '#000' : '#fff',
		}),
	};

	return (
		<header className='header'>
			<NavLink to={PATH.INDEX} className='logo'>
				<img src='assets/images/logo.svg' alt='logo' />
				<span>Weather</span>
			</NavLink>
			<div className='actions'>
				<img onClick={() => theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light')} src='assets/images/drop.svg' alt='drop' />
				<div className='select'>
					{/* <Select
						defaultValue={storage.getItem('city') || options[0]}
						placeholder='search'
						styles={colorStyles}
						options={options}
						onChange={e => {
							dispatch(onSelectClick(e?.value));
							console.log(e.value);
							storage.setItem(
								'city',
								options.find(item => item.value === e?.value)
							);
							storage.setItem('currentWeather', data.list[0]);
						}}
					/> */}
					<CreatableSelect
						isDisabled={isLoadingSelect}
						isLoading={isLoadingSelect}
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
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
