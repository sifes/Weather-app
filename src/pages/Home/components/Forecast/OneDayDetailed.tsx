import React from 'react';
import OneDayDetailedItem from './OneDayDetailedItem';
import { useCustomSelector } from '../../../../hooks/storeHooks';
const OneDayDetailed = () => {
	const { activeDay, isDetailedDayShown } = useCustomSelector(state => state.WeatherSliceReducer);

	return (
		<div className='oneDayDetailed'>
			{!isDetailedDayShown ? (
				<div className='oneDayDetailedPre'>Choose a day to see it more detailed!</div>
			) : (
				<>
					<div>{new Date(activeDay[0].dt_txt).toString().slice(0, 16)}</div>
					<ul className='oneDayDetailedWrapper'>
						{activeDay.map(oneDayDetailedInfo => (
							<OneDayDetailedItem key={oneDayDetailedInfo.dt} weather={oneDayDetailedInfo} />
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default OneDayDetailed;
