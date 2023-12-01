import React from 'react';
import { Weather } from '../../../../types';
import { OneDayItem } from './day/Day';

export const Days: React.FC<{ weatherArray: Weather[] }> = ({ weatherArray }) => {
  return (
    <>
      <div className='days'>
        {[0, 1, 2, 3, 4].map((day) => (
          <OneDayItem key={day} weatherFullDay={[...weatherArray].splice(8 * day, 8)} />
        ))}
      </div>
    </>
  );
};
