import React, { useEffect } from 'react'
import Select from 'react-select'
import useTheme from '../../hooks/useTheme'
import { useCustomDispatch } from '../../hooks/storeHooks'
import { onSelectClick } from '../../store/slices/WeatherSlice'
const Header:React.FC = () => {
  const dispatch = useCustomDispatch()

  const theme = useTheme()
  const options = [
    { value: 'london', label: 'London' },
    { value: 'kyiv', label: 'Kyiv' },
    { value: 'paris', label: 'Paris' },
    { value: 'newYork', label: 'New-York' },
    { value: 'tokyo', label: 'Tokyo' },
    { value: 'sydney', label: 'Sydney' },
  ]


  const colourStyles = {
    control: (styles:any) => ({
      ...styles, 
      height: '37px',
      backgroundColor: theme.theme==='light'?'#4793FF33': '#4F4F4F',
      borderRadius: '10px',
    }),
    singleValue: (styles:any) => ({
      ...styles, 
      color: theme.theme==='light'?'#000': '#fff',
    }),
  }

  return (
    <header className='header'>
      <div className="logo">
        <img src="assets/images/logo.svg" alt="logo" />
        <span>Weather</span>
      </div>
      <div className="select">
        <img onClick={()=>theme.changeTheme(theme.theme==='light'?'dark':'light')} src="assets/images/drop.svg" alt="drop" />
        <Select defaultValue={options[0]} className='select-city' styles={colourStyles} options={options} isSearchable onChange={(e)=>dispatch(onSelectClick(e?.value))}/>
      </div>
      
    </header>
  )
}

export default Header
