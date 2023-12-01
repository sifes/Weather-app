import Tabs from './tabs/Tabs';
import Days from './days/Days';
import { useSelectSelector, useWeatherSelector } from '../../../hooks/storeHooks';
import { useFetchWeather } from '../../../hooks/useFetchWeather';
import { Weather } from '../../../types';
import OneDayDetailed from './days-detailed/day-detailed/DayDetailed';

const Forecast: React.FC = () => {
  const { activeCity } = useSelectSelector();
  const { data, isLoading } = useFetchWeather(activeCity);
  const { isDaysShown } = useWeatherSelector();

  if (isLoading) return <div>Loading...</div>;

  const weatherArray: Weather[] = data.list;

  return (
    <>
      <Tabs today={weatherArray.slice(0, 8)} tomorrow={weatherArray.slice(8, 16)} />
      {isDaysShown && <Days weatherArray={weatherArray} />}
      <OneDayDetailed />
    </>
  );
};

export default Forecast;