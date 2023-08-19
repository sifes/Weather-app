import Tabs from './Tabs'
import Days from './Days'
import OneDayDetailed from './OneDayDetailed'
import { useWeatherSelector } from '../../../../hooks/storeHooks'
import { weatherAPI } from '../../../../services/WeatherService'
import { CITIES, Weather } from '../../../../types'

const Forecast: React.FC = () => {
  const { data, isLoading } = weatherAPI.useFetchWeatherDataQuery(CITIES.LONDON);
  const { isDaysShown } = useWeatherSelector()

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const weatherArray: Weather[] = data.list

  return (
    <>
      <Tabs today={weatherArray.slice(0, 8)} tomorrow={weatherArray.slice(8, 16)} />
      {isDaysShown && <Days weatherArray={weatherArray} />}
      <OneDayDetailed />
    </>
  )
}

export default Forecast
