import React from 'react';
import { LineChartComponent, RadarChartComponent } from './WeatherChart';
import { VALUESTOGET, Weather } from '../../../types';
import { getFullDate, getTempData, getWindSpeedData, getWindDirectData, getMinValue, getAvgValue, getMaxValue, getCloudsData } from '../../../utils';

interface Props {
	weather: Weather[];
}

const DayStatistics: React.FC<Props> = ({ weather }) => {


	console.log(getMinValue(weather, VALUESTOGET.TEMP));
	return (
		<div className='DayStatistics'>
			<div className='date'>{getFullDate(weather[0].dt)}</div>
			<div className='info-wrapper'>
				<ul className='info'>
					<li>
						Max pressure: <span className='value'>{getMaxValue(weather, VALUESTOGET.PRESSURE)?.main.pressure}</span> <span className='time'> {getMaxValue(weather, VALUESTOGET.PRESSURE)?.dt_txt.slice(11, 16)}</span>
					</li>
					<li>
						min pressure: <span className='value'>{getMinValue(weather, VALUESTOGET.PRESSURE)?.main.pressure}</span> <span className='time'> {getMinValue(weather, VALUESTOGET.PRESSURE)?.dt_txt.slice(11, 16)}</span>
					</li>
					<li>
						avg pressure: <span className='value'>{getAvgValue(weather, VALUESTOGET.PRESSURE)}</span>
					</li>
				</ul>
				<ul className='info'>
					<li>
						Max humidity: <span className='value'>{getMaxValue(weather, VALUESTOGET.HUMIDITY)?.main.humidity}</span> <span className='time'> {getMaxValue(weather, VALUESTOGET.HUMIDITY)?.dt_txt.slice(11, 16)}</span>
					</li>
					<li>
						min humidity: <span className='value'>{getMinValue(weather, VALUESTOGET.HUMIDITY)?.main.humidity}</span> <span className='time'> {getMinValue(weather, VALUESTOGET.HUMIDITY)?.dt_txt.slice(11, 16)}</span>
					</li>
					<li>
						avg humidity: <span className='value'>{getAvgValue(weather, VALUESTOGET.HUMIDITY)}</span>
					</li>

				</ul>
				<ul className='info'>
					<li>
						Max temp: <span className='value'>+{getMaxValue(weather, VALUESTOGET.TEMP)?.main.temp}°</span> <span className='time'> {getMaxValue(weather, VALUESTOGET.TEMP)?.dt_txt.slice(11, 16)}</span>{' '}
					</li>
					<li>
						min temp: <span className='value'>+{getMinValue(weather, VALUESTOGET.TEMP)?.main.temp}°</span> <span className='time'>{getMinValue(weather, VALUESTOGET.TEMP)?.dt_txt.slice(11, 16)}</span>{' '}
					</li>
					<li>
						avg temp: <span className='value'>+{getAvgValue(weather, VALUESTOGET.TEMP)}°</span>
					</li>
				</ul>
				<ul className='info'>
					<li>
						Max wind speed: <span className='value'>{getMaxValue(weather, VALUESTOGET.WIND_SPEED)?.wind.speed}</span> <span className='time'> {getMaxValue(weather, VALUESTOGET.WIND_SPEED)?.dt_txt.slice(11, 16)}</span>
					</li>
					<li>
						min wind speed: <span className='value'>{getMinValue(weather, VALUESTOGET.WIND_SPEED)?.wind.speed}</span> <span className='time'> {getMinValue(weather, VALUESTOGET.WIND_SPEED)?.dt_txt.slice(11, 16)}</span>
					</li>
					<li>
						avg wind speed: <span className='value'>{getAvgValue(weather, VALUESTOGET.WIND_SPEED)}</span>
					</li>
				</ul>

			</div>
			<div className='chart'>
				<p>Wind rose:</p>
				<RadarChartComponent data={getWindDirectData(weather, 8)} datakey='windDirect' />
			</div>
			<div className='chart'>
				<p>Clouds rose:</p>
				<RadarChartComponent data={getCloudsData(weather, 100)} datakey='hours' />
			</div>
		</div>
	);
};

export default DayStatistics;
