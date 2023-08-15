import React from 'react';
import "./styles/index.scss";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/Home/Home';
import Statistics from './pages/Statistics/Statistics';
import NotFound from './pages/NotFound';
import Layout from './pages/shared/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{
      index: true,
      element: <Home/>,
    },
    {
      path: "/statistics",
      element: <Statistics/>,
    },
    {
      path: "*",
      element: <NotFound/>,
    },]
  }
  
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
