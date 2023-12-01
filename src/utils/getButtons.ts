import { Weather } from '../types';

export function getButtons(today: Weather[], tomorrow: Weather[]) {
  return [
    {
      id: 0,
      value: 'today',
      activeDay: today,
    },
    {
      id: 1,
      value: 'tomorrow',
      activeDay: tomorrow,
    },
    {
      id: 2,
      value: '5 days',
      activeDay: today,
    },
  ];
}
