import { VALUESTOGET, Weather } from "../types";

// <--- HELPER-FUNCTIONS ---> //
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
export function getDate(dateText: string) {
	const date = (new Date(dateText)).toString().split(' ')
	return `${date[1]} ${date[2]} ${date[4].slice(0, 5)}`
}
export function getWeekDay(dateText: string) {
	return new Date(dateText).toString().split(' ')[0]
}
// <--- for selectSlice
export function upFirstChar(str: string) {
	return str[0].toUpperCase() + str.slice(1);
}
export const createOption = (label: string) => ({
	label: upFirstChar(label).trim(),
	value: label.toLowerCase().trim().replace(/\W/g, ''),
});
// </--- for selectSlice
// </--- HELPER-FUNCTIONS ---/> //

// <--- GET DATA FOR CHARTS ---> //
export function getTempData(arr: Weather[]) {
	return arr.map(weather => ({ hours: weather.dt_txt.slice(11, 16), temperature: weather.main.temp.toFixed() }));
}
export function getWindSpeedData(arr: Weather[]) {
	return arr.map(weather => ({ hours: weather.dt_txt.slice(11, 16), wind: weather.wind.speed }));
}
export function getWindDirectData(arr: Weather[], fullmark: number) {
	const initialData = [{
		windDirect: 'N',
		a: 1,
		fullmark
	},
	{
		windDirect: 'NE',
		a: 1,
		fullmark
	},
	{
		windDirect: 'E',
		a: 1,
		fullmark
	},
	{
		windDirect: 'SE',
		a: 1,
		fullmark
	},
	{
		windDirect: 'S',
		a: 1,
		fullmark
	},
	{
		windDirect: 'SW',
		a: 1,
		fullmark
	},
	{
		windDirect: 'W',
		a: 1,
		fullmark
	},
	{
		windDirect: 'NW',
		a: 1,
		fullmark
	},
	]
	const a = arr.reduce((acum, curr) => {
		acum.find((initData) => initData.windDirect === getWindDirect(curr.wind.deg))!.a++
		return acum
	}, initialData)
	return a
}
export function getCloudsData(arr: Weather[], fullmark: number) {

	const a = arr.map((item) => ({
		hours: item.dt_txt.slice(11, 16),
		a: item.clouds.all,
		fullmark
	}))
	return a
}
// </--- GET DATA FOR CHARTS ---/> //


// <--- AVERAGE, MINIMUM, MAXIMUM FUNCTIONS ---> //
export function getMinValue(arr: Weather[], whatToGet: string) {
	switch (whatToGet) {
		case VALUESTOGET.TEMP:
			return arr.reduce((acum, curr) => acum.main.temp > curr.main.temp ? curr : acum)
		case VALUESTOGET.WIND_SPEED:
			return arr.reduce((acum, curr) => acum.wind.speed > curr.wind.speed ? curr : acum)
		case VALUESTOGET.PRESSURE:
			return arr.reduce((acum, curr) => acum.main.pressure > curr.main.pressure ? curr : acum)
		case VALUESTOGET.HUMIDITY:
			return arr.reduce((acum, curr) => acum.main.humidity > curr.main.humidity ? curr : acum)
		default:
			break;
	}
}
export function getMaxValue(arr: Weather[], whatToGet: string) {
	switch (whatToGet) {
		case VALUESTOGET.TEMP:
			return arr.reduce((acum, curr) => acum.main.temp < curr.main.temp ? curr : acum)
		case VALUESTOGET.WIND_SPEED:
			return arr.reduce((acum, curr) => acum.wind.speed < curr.wind.speed ? curr : acum)
		case VALUESTOGET.PRESSURE:
			return arr.reduce((acum, curr) => acum.main.pressure < curr.main.pressure ? curr : acum)
		case VALUESTOGET.HUMIDITY:
			return arr.reduce((acum, curr) => acum.main.humidity < curr.main.humidity ? curr : acum)
		default:
			break;
	}

}
export function getAvgValue(arr: Weather[], whatToGet: string) {
	switch (whatToGet) {
		case VALUESTOGET.TEMP:
			return (arr.reduce((acum, curr) => acum + curr.main.temp, 0) / arr.length).toFixed(2)
		case VALUESTOGET.WIND_SPEED:
			return (arr.reduce((acum, curr) => acum + curr.wind.speed, 0) / arr.length).toFixed(2)
		case VALUESTOGET.PRESSURE:
			return (arr.reduce((acum, curr) => acum + curr.main.pressure, 0) / arr.length).toFixed(2)
		case VALUESTOGET.HUMIDITY:
			return (arr.reduce((acum, curr) => acum + curr.main.humidity, 0) / arr.length).toFixed(2)
		default:
			break;
	}
}
// </--- AVERAGE, MINIMUM, MAXIMUM FUNCTIONS ---/> //