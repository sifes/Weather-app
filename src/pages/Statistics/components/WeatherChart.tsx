import React from 'react';

import { Radar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

type TempProps = { data: { hours: string; temperature: string }[], datakey: string };
type WindProps = { data: { hours: string; wind: number }[], datakey: string };


export const LineChartComponent: React.FC<TempProps | WindProps> = ({ data, datakey }) => {
	return (
		<LineChart compact={true} width={600} height={400} data={data}>
			<XAxis dataKey='hours' />
			<YAxis />
			<Tooltip />
			<Legend />
			<Line type='monotone' dataKey={datakey} stroke='#8884d8' />
		</LineChart>
	);
};
export const RadarChartComponent: React.FC = () => {
	const data = [
		{
			subject: 'Math',
			A: 130,
			B: 110,
			fullMark: 150,
		},
		{
			subject: 'Chinese',
			A: 98,
			B: 130,
			fullMark: 150,
		},
		{
			subject: 'English',
			A: 86,
			B: 130,
			fullMark: 150,
		},
		{
			subject: 'Geography',
			A: 99,
			B: 100,
			fullMark: 150,
		},
		{
			subject: 'Physics',
			A: 85,
			B: 90,
			fullMark: 150,
		},
		{
			subject: 'History',
			A: 65,
			B: 85,
			fullMark: 150,
		},
	];

	return (
		<ResponsiveContainer width='100%' minWidth={500} minHeight={400} height='100%'>
			<RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
				<PolarGrid />
				<PolarAngleAxis dataKey='subject' />
				<PolarRadiusAxis />
				<Radar name='Mike' dataKey='A' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
			</RadarChart>
		</ResponsiveContainer>
	);
};
{
}
