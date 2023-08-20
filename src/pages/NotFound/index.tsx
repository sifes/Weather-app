import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../router';
import { storage } from '../../storage/storage';

const NotFound: React.FC = () => {
	return (
		<div className='notFound'>
			Oops! something went wrong
			<br />
			<NavLink onClick={() => {
				storage.setItem(
					'city', { value: 'kyiv', label: 'Kyiv' }
				);
				storage.setItem('currentWeather', null);
			}} to={PATH.INDEX} className='logo'>
				<span>Weather</span>
			</NavLink>
		</div>
	);
};

export default NotFound;
