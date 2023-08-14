import React from 'react';
import OneDayItem from './OneDayItem';
import { Weather } from '../../../../types';


const Days: React.FC<{ weatherArray: Weather[] }> = ({ weatherArray }) => {
	const days: number[] = [ 0,1,2,3,4];
	return (
		<>
			<div className='days'>
				{days.map((day) => (
            <OneDayItem key={day} weatherFullDay={[...weatherArray].splice(8*day,8)}  />
          )
         )}
			</div>
		</>
	);
};

export default Days;
