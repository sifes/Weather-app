import React from 'react';
import { LineChartComponent, RadarChartComponent } from './WeatherChart';
import { Weather } from '../../../types';
import { getDate } from '../../../utils';

export const sampleDataPolar = [
	{ hours: '06:00', x: 0, y: 14 },
	{ hours: '09:00', x: 0, y: 15 },
	{ hours: '12:00', x: 0, y: 18 },
	{ hours: '15:00', x: 0, y: 22 },
	{ hours: '18:00', x: 0, y: 17 },
	{ hours: '21:00', x: 0, y: 17 },
	{ hours: '00:00', x: 0, y: 17 },
	{ hours: '03:00', x: 0, y: 17 },
];
const data = [
	{ hours: '06:00', temperature: 10 },
	{ hours: '09:00', temperature: 12 },
	{ hours: '12:00', temperature: 15 },
	{ hours: '15:00', temperature: 18 },
	{ hours: '18:00', temperature: 20 },
	{ hours: '21:00', temperature: 14 },
	{ hours: '00:00', temperature: 12 },
	{ hours: '03:00', temperature: 10 },
];

interface Props {
	weather: Weather[];
}

const DayStatistics: React.FC<Props> = ({ weather }) => {
	function getData(arr: Weather[]) {
		const a = arr.map(weather => ({ hours: weather.dt_txt.slice(11, 16), temperature: weather.main.temp.toFixed() }));
		console.log(a);
		return a;
	}
	getData(weather);

	return (
		<div className='DayStatistics'>
			<div className='date'>{getDate(weather[0].dt)}</div>
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
					<LineChartComponent data={getData(weather)} />
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
					<LineChartComponent data={getData(weather)} />
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
					<RadarChartComponent />
				</div>
			</div>
		</div>
	);
};

export default DayStatistics;
