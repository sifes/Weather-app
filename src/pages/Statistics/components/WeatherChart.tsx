import React from 'react';

import { Radar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

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
export const RadarChartComponent: React.FC<any> = ({ data }) => {

	return (
		<ResponsiveContainer width='100%' minWidth={500} minHeight={400} height='100%'>
			<RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
				<PolarGrid />
				<PolarAngleAxis dataKey='windDirect' />
				<PolarRadiusAxis />
				<Radar name='Mike' dataKey='a' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
			</RadarChart>
		</ResponsiveContainer>
	);
};
{
}
