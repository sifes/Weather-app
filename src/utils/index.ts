import { Weather } from "../types";

export function getFullDate(timestamp: number): string {
	const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	const date = new Date(timestamp * 1000);
	const dayOfWeek: string = daysOfWeek[date.getDay()];
	const day: number = date.getDate();
	const month: string = months[date.getMonth()];
	const year: number = date.getFullYear();

	return `${dayOfWeek} ${day} ${month}, ${year}`;
}

export function getWindDirect(windAngle: number): string {
	const directions: string[] = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW',]
	return directions[Math.round(windAngle / 45)] || directions[0] // if wind degree is greater than 337.5 we get index 8, what means that we need 'N'
}

export function getTempData(arr: Weather[]) {
	return arr.map(weather => ({ hours: weather.dt_txt.slice(11, 16), temperature: weather.main.temp.toFixed() }));
}
export function getWindSpeedData(arr: Weather[]) {
	return arr.map(weather => ({ hours: weather.dt_txt.slice(11, 16), wind: weather.wind.speed }));
}
export function getWindDirectData(arr: Weather[]) {
	const initialData = [{
		windDirect: 'N',
		a: 0,
		b: 3,
		fullmark: 40
	},
	{
		windDirect: 'NE',
		a: 0,
		b: 3,
		fullmark: 40
	},
	{
		windDirect: 'E',
		a: 0,
		b: 3,
		fullmark: 40
	},
	{
		windDirect: 'SE',
		a: 0,
		b: 3,
		fullmark: 40
	},
	{
		windDirect: 'S',
		a: 0,
		b: 3,
		fullmark: 40
	},
	{
		windDirect: 'SW',
		a: 0,
		b: 3,
		fullmark: 40
	},
	{
		windDirect: 'W',
		a: 0,
		b: 3,
		fullmark: 40
	},
	{
		windDirect: 'NW',
		a: 0,
		b: 3,
		fullmark: 40
	},
	]
	const a = arr.reduce((acum, curr) => {
		acum.find((initData) => initData.windDirect === getWindDirect(curr.wind.deg))!.a++
		return acum
	}, initialData)
	return a
}