import { useCustomDispatch, useWeatherSelector } from '../../../../../hooks/storeHooks';
import { onCancelClick } from '../../../../../store/slices/WeatherSlice';
import { Weather } from '../../../../../types';
import OneDayDetailedItem from '../DayDetailedItem';

const OneDayDetailed: React.FC = () => {
  const { activeDay, isDetailedDayShown } = useWeatherSelector();
  const dispatch = useCustomDispatch();

  return (
    <div className='oneDayDetailed'>
      {!isDetailedDayShown ? (
        <h3 className='oneDayDetailedPre'>Pick a day to see it in details!</h3>
      ) : (
        <>
          <div className='oneDayDetailedHeader'>
            <h4>{new Date(activeDay[0].dt_txt).toString().slice(0, 16)}</h4>
            <button onClick={() => dispatch(onCancelClick())} className='tab-cancel'>
              Close info
            </button>
          </div>
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
