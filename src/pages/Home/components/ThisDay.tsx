import React from 'react'
import { Weather } from '../../../types'

interface Props {
  weather: Weather,
  city: string
}


const ThisDay = ({weather, city}: Props) => {
  return (
    <div className='thisDay'>
      <div className="thisDay-header">
        <div className="thisDay-info">
          <span>{Math.round(weather.main.temp)}° </span>
          <p>Today</p>
        </div>
        <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="sun" />
      </div>
      <div className="thisDay-time">Time: <span>{weather.dt_txt.split(' ')[1].split(':')[0] + ':00'}</span></div>
      <div className="thisDay-city">city: <span>{city}</span></div>
    </div>
  )
}

export default ThisDay
