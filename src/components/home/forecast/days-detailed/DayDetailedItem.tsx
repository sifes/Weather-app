import { Weather } from "../../../../types";
import { getWindDirect } from "../../../../utils/helpers";

const OneDayDetailedItem: React.FC<{ weather: Weather }> = ({ weather }) => {
	return (
		<li className='item'>
			<img className='image' src={`assets/images/weather/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
			<div className='temp'>+{weather.main.temp.toFixed(1)}°</div>
			<div className='time'>{weather.dt_txt.slice(11, 16)}</div>
			<div className='pop'>Probability:{(weather.pop * 100).toFixed()}%</div>
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
