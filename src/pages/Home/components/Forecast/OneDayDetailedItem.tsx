import React from 'react';
import { Weather } from '../../../../types';
const OneDayDetailedItem = ({weather}:any ) => {
	
  
	return (
		<li className='item'>
			<img className='image' src='assets/images/weather/cloudy.svg' alt='cloudy' />
			<div className='temp'>+{weather.main.temp}</div>
			<div className='time'>{weather.dt_txt.split(' ')[1].split(':')[0] + ':00'}</div>
			<div className='desc'>mainly cloudy</div>
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
