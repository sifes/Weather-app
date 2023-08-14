import React from 'react';
import { Weather } from '../../../../types';
const OneDayDetailedItem = ({weather}:{weather: Weather} ) => {
	return (
		<li className='item'>
			<img className='image' src={`assets/images/weather/${weather.weather[0].icon}.png`} alt='cloudy' />
			<div className='temp'>+{weather.main.temp.toFixed(1)}°</div>
			<div className='time'>{weather.dt_txt.slice(11,16)}</div>
			<div className='desc'>{weather.weather[0].description}</div>
			<div className='wind'>wind speed: {weather.wind.speed} m/s <br/>
				From:{' '}  
				{
					{
						0: 'N',
						1: 'NE',
						2: 'E',
						3: 'SE',
						4: 'S',
						5: 'SW',
						6: 'W',
						7: 'NW',
					}[Math.round(weather.wind.deg / 45)]
				}
			</div>
		</li>
	);
};

export default OneDayDetailedItem;
