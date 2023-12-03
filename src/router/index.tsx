import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { NotFound } from '../pages/not-found/NotFound';
import { Statistics } from '../pages/statistics/Statistics';
import { Home } from '../pages/home/Home';

export enum PATH {
  INDEX = '/',
  STATISTICS = '/statistics',
}

export const router = createBrowserRouter([
  {
    path: PATH.INDEX,
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATH.STATISTICS,
        element: <Statistics />,
      },
    ],
  },
]);
