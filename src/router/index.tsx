import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Layout from './Layout';
import Statistics from '../pages/statistics/Statistics';
import NotFound from '../pages/not-found/NotFound';

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
