import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCustomDispatch } from '../../../../hooks/storeHooks';
import { PATH } from '../../../../router';
import { onTabsClick } from '../../../../store/slices/WeatherSlice';
import { Weather } from '../../../../types';

type Props = {
  today: Weather[];
  tomorrow: Weather[];
};

const Tabs: React.FC<Props> = ({ today, tomorrow }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const dispatch = useCustomDispatch();

  const buttons = [
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
        {buttons.map((button) => (
          <button
            onClick={() => {
              setActiveIndex(button.id);
              dispatch(onTabsClick({ id: button.id, activeDay: button.activeDay }));
            }}
            key={button.id}
            className={activeIndex === button.id ? 'tab-button active' : 'tab-button'}
          >
            {button.value}
          </button>
        ))}
      </div>
      <NavLink className='link' to={PATH.STATISTICS}>
        statistics
      </NavLink>
    </div>
  );
};

export default Tabs;
