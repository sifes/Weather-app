import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../router';
import { storage } from '../../storage/storage';
import { useCustomDispatch } from '../../hooks/storeHooks';
import { handleCancel } from '../../store/slices/SelectSlice';

const NotFound: React.FC = () => {
  const dispatch = useCustomDispatch();
  return (
    <div className='notFound'>
      Oops! something went wrong
      <br />
      please choose another city
      <br />
      <NavLink
        onClick={() => {
          dispatch(handleCancel(storage.getItem('city')));
          storage.setItem('city', { value: 'kyiv', label: 'Kyiv' });
        }}
        to={PATH.INDEX}
        className='logo'
      >
        <span>Weather</span>
      </NavLink>
    </div>
  );
};

export default NotFound;
