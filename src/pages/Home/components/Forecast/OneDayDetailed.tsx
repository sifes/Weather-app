import OneDayDetailedItem from './OneDayDetailedItem';
import { useWeatherSelector } from '../../../../hooks/storeHooks';
import { Weather } from '../../../../types';

const OneDayDetailed: React.FC = () => {
	const { activeDay, isDetailedDayShown } = useWeatherSelector()

	return (
		<div className='oneDayDetailed'>
			{!isDetailedDayShown ? (
				<div className='oneDayDetailedPre'>Choose a day to see it more detailed!</div>
			) : (
				<>
					<div>{new Date(activeDay[0].dt_txt).toString().slice(0, 16)}</div>
					<ul className='oneDayDetailedWrapper'>
						{activeDay.map((oneDayDetailedInfo: Weather) => (
							<OneDayDetailedItem key={oneDayDetailedInfo.dt} weather={oneDayDetailedInfo} />
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default OneDayDetailed;
