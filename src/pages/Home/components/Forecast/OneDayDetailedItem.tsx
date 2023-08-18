import { Weather } from '../../../../types';
import { getWindDirect } from '../../../../utils';
const OneDayDetailedItem = ({ weather }: { weather: Weather }) => {
	return (
		<li className='item'>
			<img className='image' src={`assets/images/weather/${weather.weather[0].icon}.png`} alt='cloudy' />
			<div className='temp'>+{weather.main.temp.toFixed(1)}°</div>
			<div className='time'>{weather.dt_txt.slice(11, 16)}</div>
			<div className='pop'>Probability:{weather.pop * 100}%</div>
			<div className='desc'>{weather.weather[0].description}</div>
			<div className='wind'>
				wind speed: {weather.wind.speed} m/s <br />
				From:{' '}
				{getWindDirect(weather.wind.deg)}
			</div>
		</li>
	);
};

export default OneDayDetailedItem;
