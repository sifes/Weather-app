import React from 'react'
import { Weather } from '../../../../types'
import { useCustomDispatch } from '../../../../hooks/storeHooks'
import { onDayClick } from '../../../../store/slices/WeatherSlice'


const OneDayItem: React.FC<{ weatherFullDay: Weather[] }>  = ({weatherFullDay}) => {
  const currentWeather = weatherFullDay[2]
  const dispatch = useCustomDispatch()
  
  function getDate(dateText:string) {
    return new Date(dateText).toString().split(' ')[0]

  }
  function getWeekDay(dateText:string) {
    const date = (new Date(dateText)).toString().split(' ')
    return `${date[1]} ${date[2]} ${date[4].slice(0,5)}`
  }

  return (
    <article onClick={()=>dispatch(onDayClick(weatherFullDay))} className='day'>
        <div className='day-name'>{getDate(currentWeather.dt_txt)}</div>
        <div className='day-date'>{getWeekDay(currentWeather.dt_txt)}</div>
        <img src={`assets/images/weather/${currentWeather.weather[0].icon}.png`} alt={currentWeather.dt_txt} className='day-img'  />
        <div className='day-tempDay'>+{currentWeather.main.temp_max.toFixed(1)}°</div>
        <div className='day-tempNight'>+{currentWeather.main.feels_like.toFixed(1)}°</div>
        <div className='day-info'>{currentWeather.weather[0].main}</div>
    </article>
  )
}

export default OneDayItem
