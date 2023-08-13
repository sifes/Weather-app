import React from 'react'
import OneDayItem from './OneDayItem'

export type Day = {
  name: string,
  date: string,
  weather: string,
  tempDay: string,
  tempNight: string,
  info: string
}

const Days = () => {
  const days: Day[] = [{
    name: 'Today',
    date: '1 July',
    weather: 'assets/images/weather/cloudy.svg',
    tempDay: '+18°',
    tempNight: '+14°',
    info: 'cloudy'
  },
  {
    name: 'Tomorrow',
    date: '2 July',
    weather: 'assets/images/weather/cloudy.svg',
    tempDay: '+18°',
    tempNight: '+14°',
    info: 'cloudy'
  },
  {
    name: 'Mn',
    date: '3 July',
    weather: 'assets/images/weather/cloudy.svg',
    tempDay: '+18°',
    tempNight: '+14°',
    info: 'cloudy'
  },
  {
    name: 'Ts',
    date: '4 July',
    weather: 'assets/images/weather/rain.svg',
    tempDay: '+18°',
    tempNight: '+14°',
    info: 'cloudy'
  },
  {
    name: 'Wd',
    date: '5 July',
    weather: 'assets/images/weather/sun.svg',
    tempDay: '+18°',
    tempNight: '+14°',
    info: 'cloudy'
  },
  
]

  return (
    <>
      <div className='days'>
        {days.map(day => <OneDayItem key={day.name} {...day} />)}
      </div>
    </>
  )
}

export default Days
