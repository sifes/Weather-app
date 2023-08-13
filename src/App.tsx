import React from 'react';
import "./styles/index.scss";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/Home/Home';
import Statistics from './pages/Statistics/Statistics';
import NotFound from './pages/NotFound';
import Header from './pages/shared/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/statistics",
    element: <Statistics/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  },
]);

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
