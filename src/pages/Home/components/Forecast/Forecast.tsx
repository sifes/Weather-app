import React from 'react'
import Tabs from './Tabs'
import Days from './Days'
import OneDayDetailed from './OneDayDetailed'
import { useCustomSelector } from '../../../../hooks/storeHooks'
import { weatherAPI } from '../../../../services/WeatherService'
import { CITIES } from '../../../../types'

const Forecast = () => {
  const { data, isLoading } = weatherAPI.useFetchWeatherDataQuery(CITIES.LONDON);
  const {isDaysShown} = useCustomSelector(state=>state.WeatherSliceReducer)

	if (isLoading) {
		return <div>Loading...</div>;
	}

  const weatherArray = data.list

  return (
    <>
      <Tabs today={weatherArray.slice(0,8)} tomorrow={weatherArray.slice(8,16)}/>
      {isDaysShown && <Days />}  
      <OneDayDetailed />
    </>
  )
}

export default Forecast
