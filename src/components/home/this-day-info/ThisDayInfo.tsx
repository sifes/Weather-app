import React from 'react';
import { ThisDayInfoItem } from './one-item/ThisDayInfoItem';
import { IdayInfo, Weather } from '../../../types';
import { getDaysInfo } from '../../../utils/getDaysInfo';

export const ThisDayInfo: React.FC<{ weather: Weather }> = ({ weather }) => {
  const daysInfo: IdayInfo[] = getDaysInfo(weather);

  return (
    <div className='thisDayInfo'>
      <ul>
        {daysInfo.map((dayInfo) => (
          <ThisDayInfoItem key={dayInfo.label} {...dayInfo} />
        ))}
      </ul>
      <img className='background' src='assets/images/cloud.png' alt='background' />
    </div>
  );
};