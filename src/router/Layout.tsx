import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../pages/shared/Header'

const Layout: React.FC = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
