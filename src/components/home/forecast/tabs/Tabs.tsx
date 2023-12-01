import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCustomDispatch } from '../../../../hooks/storeHooks';
import { PATH } from '../../../../router';
import { onTabsClick } from '../../../../store/slices/WeatherSlice';
import { Weather } from '../../../../types';
import { getButtons } from '../../../../utils/getButtons';

type Props = {
  today: Weather[];
  tomorrow: Weather[];
};

export const Tabs: React.FC<Props> = ({ today, tomorrow }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const dispatch = useCustomDispatch();

  const buttonsArray = getButtons(today, tomorrow);

  return (
    <div className='tabs-wrapper'>
      <div className='tabs'>
        {buttonsArray.map((button) => (
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