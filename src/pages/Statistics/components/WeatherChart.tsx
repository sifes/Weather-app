import React from 'react';

import { Radar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, CartesianGrid } from 'recharts';

type TempProps = { data: { hours: string; temperature: string }[], datakey: string };
type WindSpeedProps = { data: { hours: string; wind: number }[], datakey: string };
type WindDirectProps = { data: { windDirect: string, a: number, fullmark: number }[], datakey: string };
type CloudsProps = { data: { hours: string, a: number, fullmark: number }[], datakey: string };


export const LineChartComponent: React.FC<TempProps | WindSpeedProps> = ({ data, datakey }) => {
	return (
		<LineChart compact={true} width={500} height={350} data={data}>
			<XAxis dataKey='hours' />
			<YAxis mirror={true} />
			<Tooltip />
			<Legend />
			<Line type='monotone' dataKey={datakey} stroke='#8884d8' />
		</LineChart>
	);
};
export const RadarChartComponent: React.FC<WindDirectProps | CloudsProps> = ({ data, datakey }) => {
	return (
		<ResponsiveContainer width={500} maxHeight={400} height='100%'>
			<RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
				<PolarGrid />
				<PolarAngleAxis dataKey={datakey} />
				<PolarRadiusAxis angle={90} opacity={0.3} domain={[0, data[0].fullmark]} />
				<Radar name={datakey} dataKey='a' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6} />
			</RadarChart>
		</ResponsiveContainer>
	);
};
{
}
