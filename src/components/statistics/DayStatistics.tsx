import React from 'react';
import { LineChartComponent, RadarChartComponent } from './WeatherChart';
import { VALUESTOGET, Weather } from '../../types';
import { getFullDate, getTempData, getWindSpeedData, getWindDirectData, getMinValue, getAvgValue, getMaxValue, getCloudsData } from '../../utils';

const DayStatistics: React.FC<{ weather: Weather[] }> = ({ weather }) => {
	return (
		<div className='DayStatistics'>
			<div className='date'>{getFullDate(weather[0].dt)}</div>
			<div className='info-wrapper'>
				<ul className='info-item'>
					<li>
						Max pressure: <span className='value'>{getMaxValue(weather, VALUESTOGET.PRESSURE)?.main.pressure} hPa</span> <span className='time'> {getMaxValue(weather, VALUESTOGET.PRESSURE)?.dt_txt.slice(11, 16)}</span>
					</li>
					<li>
						min pressure: <span className='value'>{getMinValue(weather, VALUESTOGET.PRESSURE)?.main.pressure} hPa</span> <span className='time'> {getMinValue(weather, VALUESTOGET.PRESSURE)?.dt_txt.slice(11, 16)}</span>
					</li>
					<li>
						avg pressure: <span className='value'>{getAvgValue(weather, VALUESTOGET.PRESSURE)} hPa</span>
					</li>
				</ul>
				<ul className='info-item'>
					<li>
						Max humidity: <span className='value'>{getMaxValue(weather, VALUESTOGET.HUMIDITY)?.main.humidity}%</span> <span className='time'> {getMaxValue(weather, VALUESTOGET.HUMIDITY)?.dt_txt.slice(11, 16)}</span>
					</li>
					<li>
						min humidity: <span className='value'>{getMinValue(weather, VALUESTOGET.HUMIDITY)?.main.humidity}%</span> <span className='time'> {getMinValue(weather, VALUESTOGET.HUMIDITY)?.dt_txt.slice(11, 16)}</span>
					</li>
					<li>
						avg humidity: <span className='value'>{getAvgValue(weather, VALUESTOGET.HUMIDITY)}%</span>
					</li>
				</ul>
				<ul className='info-item'>
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
				<ul className='info-item'>
					<li>
						Max wind speed: <span className='value'>{getMaxValue(weather, VALUESTOGET.WIND_SPEED)?.wind.speed} m/s</span> <span className='time'> {getMaxValue(weather, VALUESTOGET.WIND_SPEED)?.dt_txt.slice(11, 16)}</span>
					</li>
					<li>
						min wind speed: <span className='value'>{getMinValue(weather, VALUESTOGET.WIND_SPEED)?.wind.speed} m/s</span> <span className='time'> {getMinValue(weather, VALUESTOGET.WIND_SPEED)?.dt_txt.slice(11, 16)}</span>
					</li>
					<li>
						avg wind speed: <span className='value'>{getAvgValue(weather, VALUESTOGET.WIND_SPEED)} m/s</span>
					</li>
				</ul>
			</div>
			<div className="line-wrapper">
				<div className='line-chart'>
					<p>Temperature:</p>
					<LineChartComponent data={getTempData(weather)} datakey='temperature' />
				</div>
				<div className='line-chart'>
					<p>Wind:</p>
					<LineChartComponent data={getWindSpeedData(weather)} datakey='wind' />
				</div>
			</div>
			<div className="radars-wrapper">
				<div className='radar-chart'>
					<p>Wind rose:</p>
					<RadarChartComponent data={getWindDirectData(weather, 8)} datakey='windDirect' />
				</div>
				<div className='radar-chart'>
					<p>Clouds rose:</p>
					<RadarChartComponent data={getCloudsData(weather, 100)} datakey='hours' />
				</div>
			</div>

		</div>
	);
};

export default DayStatistics;
