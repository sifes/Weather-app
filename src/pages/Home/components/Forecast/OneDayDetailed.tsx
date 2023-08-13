import React from 'react'
import OneDayDetailedItem from './OneDayDetailedItem'
import { useCustomSelector } from '../../../../hooks/storeHooks'
import {Weather} from '../../../../types';
const OneDayDetailed = () => {
  const activeDay:Weather[] = useCustomSelector(state=>state.WeatherSliceReducer.activeDay)
  console.log(activeDay)
  const arr = [0,1,2,3,4,5,6,7]
  return (
    <>
      <ul className='oneDayDetailed' >
        {activeDay.map(oneDayDetailedInfo => <OneDayDetailedItem key={oneDayDetailedInfo.dt} weather={oneDayDetailedInfo}/>)}
      </ul>
    </>
  )
}

export default OneDayDetailed
