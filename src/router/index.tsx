import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { Home } from '../pages/Home';
import { Statistics } from '../pages/Statistics';
import { NotFound } from '../pages/NotFound';



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
