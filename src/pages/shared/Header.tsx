import React from 'react'
import Select from 'react-select'
import useTheme from '../../hooks/useTheme'
import { useCustomDispatch, useCustomSelector } from '../../hooks/storeHooks'
import { onSelectClick } from '../../store/slices/WeatherSlice'
import { storage } from '../../storage/storage'
import { weatherAPI } from '../../services/WeatherService'
import { Link, Router } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Header:React.FC = () => {
  const {activeCity} = useCustomSelector(state=>state.WeatherSliceReducer)
	const { data, isLoading} = weatherAPI.useFetchWeatherDataQuery(activeCity);
  const dispatch = useCustomDispatch()
  const theme = useTheme()

	if (isLoading) {
		return <div>Loading...</div>;
	}
  interface CityOption {
    value: string;
    label: string;
  }
  const options:CityOption[] = [
    { value: 'london', label: 'London' },
    { value: 'kyiv', label: 'Kyiv' },
    { value: 'paris', label: 'Paris' },
    { value: 'newYork', label: 'New-York' },
    { value: 'tokyo', label: 'Tokyo' },
  ]


  const colourStyles = {
    control: (styles:any, state: any) => ({
      ...styles, 
      height: '37px',
      backgroundColor: theme.theme==='light'?'#4793FF33': '#4F4F4F',
      borderRadius: '10px',
      width: state.isFocused ? '200px' : 'auto',
    }),
    singleValue: (styles:any) => ({ // any because babel "cant find types for this shit"
        ...styles, 
        color: theme.theme==='light'?'#000': '#fff',
    }),
  }

  return (
    <header className='header'>
      <NavLink to={'/'} className="logo">
        <img src="assets/images/logo.svg" alt="logo" />
        <span>Weather</span>
      </NavLink>
      <div className="select">
        <img onClick={()=>theme.changeTheme(theme.theme==='light'?'dark':'light')} src="assets/images/drop.svg" alt="drop" />
        <Select defaultValue={storage.getItem('city')||options[0]} className='select-city' placeholder='search' styles={colourStyles} options={options} onChange={(e)=>{
          dispatch(onSelectClick(e?.value))
          storage.setItem('city', options.find(item => item.value===e?.value) )
          storage.setItem('currentWeather', data.list[0])
        }}/>
      </div>
    </header>
  )
}

export default Header
