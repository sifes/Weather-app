import React from 'react';
import { onCancelClick, onTabsClick } from '../../../../store/slices/WeatherSlice';
import { useCustomDispatch } from '../../../../hooks/storeHooks';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../../../router';

const Tabs = ({ today, tomorrow }: any) => {
	const [activeIndex, setActiveIndex] = React.useState(0)
	const dispatch = useCustomDispatch();

	const items = [
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

	return (
		<div className='tabs-wrapper'>
			<div className='tabs'>
				{items.map(item => (
					<button onClick={() => {
						setActiveIndex(item.id)
						dispatch(onTabsClick({ id: item.id, activeDay: item.activeDay }))
					}} key={item.id} className={activeIndex === item.id ? 'tab-button active' : 'tab-button'}>
						{item.value}
					</button>
				))}
			</div>
			<NavLink className='link' to={PATH.STATISTICS}>statistics</NavLink>
			<button onClick={() => dispatch(onCancelClick())} className='tab-cancel'>
				Cancel
			</button>
		</div>
	);
};

export default Tabs;
