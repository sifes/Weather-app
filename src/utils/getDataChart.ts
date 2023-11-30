import { getWindDirect } from './helpers';
import { Weather } from '../types';

// <--- GET DATA FOR CHARTS ---> //
export function getTempData(arr: Weather[]) {
  return arr.map((weather) => ({ hours: weather.dt_txt.slice(11, 16), temperature: weather.main.temp.toFixed() }));
}
export function getWindSpeedData(arr: Weather[]) {
  return arr.map((weather) => ({ hours: weather.dt_txt.slice(11, 16), wind: weather.wind.speed }));
}
export function getWindDirectData(arr: Weather[], fullmark: number) {
  const initialData = [
    {
      windDirect: 'N',
      a: 1,
      fullmark,
    },
    {
      windDirect: 'NE',
      a: 1,
      fullmark,
    },
    {
      windDirect: 'E',
      a: 1,
      fullmark,
    },
    {
      windDirect: 'SE',
      a: 1,
      fullmark,
    },
    {
      windDirect: 'S',
      a: 1,
      fullmark,
    },
    {
      windDirect: 'SW',
      a: 1,
      fullmark,
    },
    {
      windDirect: 'W',
      a: 1,
      fullmark,
    },
    {
      windDirect: 'NW',
      a: 1,
      fullmark,
    },
  ];
  const a = arr.reduce((acum, curr) => {
    acum.find((initData) => initData.windDirect === getWindDirect(curr.wind.deg))!.a++;
    return acum;
  }, initialData);
  return a;
}
export function getCloudsData(arr: Weather[], fullmark: number) {
  const a = arr.map((item) => ({
    hours: item.dt_txt.slice(11, 16),
    a: item.clouds.all,
    fullmark,
  }));
  return a;
}
// </--- GET DATA FOR CHARTS ---/> //
