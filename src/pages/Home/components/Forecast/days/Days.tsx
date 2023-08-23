import React from 'react';
import Day from './Day';
import { Weather } from '../../../../../types';

const Days: React.FC<{ weatherArray: Weather[] }> = ({ weatherArray }) => {
	return (
		<>
			<div className='days'>
				{[0, 1, 2, 3, 4].map(day => (
					<Day key={day} weatherFullDay={[...weatherArray].splice(8 * day, 8)} />
				))}
			</div>
		</>
	);
};

export default Days;
