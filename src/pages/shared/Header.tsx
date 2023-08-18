import React from 'react';
import Select from 'react-select';
import useTheme from '../../hooks/useTheme';
import { useCustomDispatch, useCustomSelector } from '../../hooks/storeHooks';
import { onSelectClick } from '../../store/slices/WeatherSlice';
import { storage } from '../../storage/storage';
import { weatherAPI } from '../../services/WeatherService';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../router';
import { CITIES, CityOption } from '../../types';

const Header: React.FC = () => {
	const { activeCity } = useCustomSelector(state => state.WeatherSliceReducer);
	const { data, isLoading } = weatherAPI.useFetchWeatherDataQuery(activeCity);
	const dispatch = useCustomDispatch();
	const theme = useTheme();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const options: CityOption[] = [
		{ value: CITIES.LONDON, label: CITIES.LONDON },
		{ value: CITIES.KYIV, label: CITIES.KYIV },
		{ value: CITIES.PARIS, label: CITIES.PARIS },
		{ value: CITIES.ROME, label: CITIES.ROME },
		{ value: CITIES.TOKYO, label: CITIES.TOKYO },
	];

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
			<div className='select'>
				<img onClick={() => theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light')} src='assets/images/drop.svg' alt='drop' />
				<Select
					defaultValue={storage.getItem('city') || options[0]}
					placeholder='search'
					styles={colorStyles}
					options={options}
					onChange={e => {
						dispatch(onSelectClick(e?.value));
						storage.setItem(
							'city',
							options.find(item => item.value === e?.value)
						);
						storage.setItem('currentWeather', data.list[0]);
					}}
				/>
			</div>
		</header>
	);
};

export default Header;
