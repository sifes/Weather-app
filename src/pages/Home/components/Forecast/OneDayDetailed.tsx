import React from 'react'
import OneDayDetailedItem from './OneDayDetailedItem'
import { useCustomSelector } from '../../../../hooks/storeHooks'
import {Weather} from '../../../../types';
const OneDayDetailed = () => {
  const activeDay:Weather[] = useCustomSelector(state=>state.WeatherSliceReducer.activeDay)
  
  return (
    <>
      <ul className='oneDayDetailed' >
        {activeDay.map(oneDayDetailedInfo => <OneDayDetailedItem key={oneDayDetailedInfo.dt} weather={oneDayDetailedInfo}/>)}
      </ul>
    </>
  )
}

export default OneDayDetailed
