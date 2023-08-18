import React from 'react';
import { LineChartComponent, RadarChartComponent } from './WeatherChart';
import { Weather } from '../../../types';
import { getFullDate, getTempData, getWindSpeedData, getWindDirectData } from '../../../utils';

interface Props {
	weather: Weather[];
}

const DayStatistics: React.FC<Props> = ({ weather }) => {


	return (
		<div className='DayStatistics'>
			<div className='date'>{getFullDate(weather[0].dt)}</div>
			<div className='item temp'>
				<ul className='info'>
					<li>
						Max temp: +28 <span>(was in 15:00)</span>{' '}
					</li>
					<li>
						min temp: +12 <span>(was in 15:00)</span>{' '}
					</li>
					<li>
						avg temp: +20 <span>(was in 15:00)</span>{' '}
					</li>
				</ul>
				<div className='chart'>
					<LineChartComponent datakey='temperature' data={getTempData(weather)} />
				</div>
			</div>
			<div className='item wind'>
				<ul className='info'>
					<li>
						Max wind speed: 4 m/s <span>(was in 15:00)</span>
					</li>
					<li>
						min wind speed: 2 m/s <span>(was in 15:00)</span>
					</li>
					<li>
						avg wind speed: 3 m/s <span>(was in 15:00)</span>
					</li>
				</ul>
				<div className='chart'>
					<LineChartComponent datakey='wind' data={getWindSpeedData(weather)} />
				</div>
			</div>
			<div className='item common'>
				<ul className='info'>
					<li>
						Max pressure: 1000 <span>(was in 15:00)</span>
					</li>
					<li>
						min pressure: 990 <span>(was in 15:00)</span>
					</li>
					<li>
						avg pressure: 995 <span>(was in 15:00)</span>
					</li>
					<li>
						Max humidity: 57 <span>(was in 15:00)</span>
					</li>
					<li>
						min humidity: 49 <span>(was in 15:00)</span>
					</li>
					<li>
						avg humidity: 53 <span>(was in 15:00)</span>
					</li>
					<li>
						Max temp: +28 <span>(was in 15:00)</span>
					</li>
					<li>
						min temp: +12 <span>(was in 15:00)</span>
					</li>
					<li>
						avg temp: +20 <span>(was in 15:00)</span>
					</li>
				</ul>
				<div className='chart'>
					<RadarChartComponent data={getWindDirectData(weather)} />
				</div>
			</div>
		</div>
	);
};

export default DayStatistics;
