import React from 'react'
import { Day } from './Days'

interface Props extends Day {}

const OneDayItem = ({name ,date, weather,tempDay,tempNight,info}:Props) => {
  return (
    <article  className='day'>
        <div className='day-name'>{name}</div>
        <div className='day-date'>{date}</div>
        <img src={weather} alt={weather} className='day-img'  />
        <div className='day-tempDay'>{tempDay}</div>
        <div className='day-tempNight'>{tempNight}</div>
        <div className='day-info'>{info}</div>
    </article>
  )
}

export default OneDayItem
