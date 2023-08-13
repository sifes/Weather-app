import React from 'react'
import ThisDayInfoItem, { dayInfo } from './ThisDayInfoItem'
import { Weather } from '../../../types'

interface Props {
  weather: Weather,
}

const ThisDayInfo = ({weather}:Props) => {

const items: dayInfo[] = [{
    img:"assets/images/thermometer.svg",
    label: 'Temperature',
    info: `${Math.round(weather.main.temp)}° - feel like ${Math.round(weather.main.feels_like)}°`
  },
  {
    img:"assets/images/pressure.svg",
    label: 'Pressure',
    info: `${weather.main.pressure} Precipitation in liquid equivalent, mm`
  },
  {
    img:"assets/images/evaporator.svg",
    label: 'Forecast',
    info: `Weather in London today: ${weather.weather[0].description}`
  },
  {
    img:"assets/images/wind.svg",
    label: 'Wind',
    info: `${weather.wind.speed} Wind gusts, m/s`
  },
]

  return (
    <div className='thisDayInfo'>
      <ul>
        {items.map((item)=> <ThisDayInfoItem key={item.label} {...item}/>)}
      </ul>
      <img className='background' src="assets/images/cloud.png" alt="background" />
    </div>
  )
}

export default ThisDayInfo
