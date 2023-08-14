import React from 'react'
import { onTabsClick } from '../../../../store/slices/WeatherSlice';
import { useCustomDispatch, useCustomSelector } from '../../../../hooks/storeHooks';

const Tabs = ({today, tomorrow}:any) => {
  const dispatch = useCustomDispatch()

 const items = [
    { 
      id: 0,
      value: 'today',
      activeDay: today
    },
    {
      id: 1,
      value: 'tomorrow',
      activeDay: tomorrow
    },
    {
      id: 2,
      value: '5 days',
      activeDay: today
    }
  ];

  return (
    <div className='tabs-wrapper'>
    <div className='tabs'>
      {items.map((item) => <div onClick={()=> dispatch(onTabsClick({id:item.id, activeDay: item.activeDay}))} key={item.id} className='tab-button'>{item.value}</div>)}
    </div>
      <div  className='tab-cancel'>Cancel</div>
    </div>
  )
}

export default Tabs
