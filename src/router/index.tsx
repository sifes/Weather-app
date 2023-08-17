import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Layout from '../pages/shared/Layout';
import Statistics from '../pages/Statistics/Statistics';
import NotFound from '../pages/NotFound';

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
