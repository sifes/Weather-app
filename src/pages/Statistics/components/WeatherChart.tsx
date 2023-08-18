import React from 'react';

import { Radar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

type TempProps = { data: { hours: string; temperature: string }[], datakey: string };
type WindSpeedProps = { data: { hours: string; wind: number }[], datakey: string };
type WindDirectProps = { data: { windDirect: string, a: number }[] };


export const LineChartComponent: React.FC<TempProps | WindSpeedProps> = ({ data, datakey }) => {
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
export const RadarChartComponent: React.FC<WindDirectProps> = ({ data }) => {
	return (
		<ResponsiveContainer width='100%' minWidth={500} minHeight={400} height='100%'>
			<RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
				<PolarGrid />
				<PolarAngleAxis dataKey='windDirect' />
				<PolarRadiusAxis />
				<Radar name='Wind' dataKey='a' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
			</RadarChart>
		</ResponsiveContainer>
	);
};
{
}
