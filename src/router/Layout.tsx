import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/shared/header/Header';

const Layout: React.FC = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
