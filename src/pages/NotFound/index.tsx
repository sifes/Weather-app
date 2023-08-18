import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../router';

const NotFound: React.FC = () => {
	return (
		<div className='notFound'>
			Oops! something went wrong
			<br />
			<NavLink to={PATH.INDEX} className='logo'>
				<span>Weather</span>
			</NavLink>
		</div>
	);
};

export default NotFound;
