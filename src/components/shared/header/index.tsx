import React from 'react';
import useTheme from '../../../hooks/useTheme';
import { NavLink } from 'react-router-dom';
import { PATH } from '../../../router';
import { HeaderSelect } from './HeaderSelect';

export const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <header className='header'>
      <NavLink to={PATH.INDEX} className='logo'>
        <img src='assets/images/logo.svg' alt='logo' />
        <span>Weather</span>
      </NavLink>
      <div className='actions'>
        <img
          onClick={() => theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light')}
          src='assets/images/drop.svg'
          alt='drop'
        />
        <HeaderSelect />
      </div>
    </header>
  );
};