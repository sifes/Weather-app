import React from 'react';
import ThisDay from './components/ThisDay';
import ThisDayInfo from './components/ThisDayInfo';
import Forecast from './components/Forecast/Forecast';
import { useCustomDispatch, useCustomSelector } from '../../hooks/storeHooks';
// import { fetchWeather } from '../../store/thunks/fetchWeather'
import { weatherAPI } from '../../services/WeatherService';
import { CITIES } from '../../types';

const Home: React.FC = () => {
	// const dispatch = useCustomDispatch()
	// const {weather} = useCustomSelector(state=>state.WeatherSliceReducer)
	// React.useEffect(()=> {
	//  dispatch(fetchWeather())
	// }, [])
	const selector = useCustomSelector
	const {activeCity} = useCustomSelector(state=>state.WeatherSliceReducer)

	const { data, isLoading} = weatherAPI.useFetchWeatherDataQuery(activeCity);

	if (isLoading) {
		return <div>Loading...</div>;
	}

  const weatherArray = data.list
  const currentCity = data.city.name
	return (
		<>
			<div className='days-wrapper'>
				<ThisDay weather={weatherArray[0]} city={currentCity} />
				<ThisDayInfo weather={weatherArray[0]} />
			</div>
			<Forecast />
		</>
	);
};

export default Home;
