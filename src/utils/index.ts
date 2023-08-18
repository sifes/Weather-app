import { VALUESTOGET, Weather } from "../types";

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
	console.log(a);

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
	// switch (whatToGet) {
	// 	case VALUESTOGET.TEMP:
	// 		return arr.reduce((acum, curr) => acum.temp < curr.main.temp ? { temp: curr.main.temp, time: curr.dt_txt } : acum, { temp: 0, time: '' })
	// 	case VALUESTOGET.WIND_SPEED:
	// 		return arr.reduce((acum, curr) => acum.windSpeed < curr.wind.speed ? { windSpeed: curr.wind.speed, time: curr.dt_txt } : acum, { windSpeed: 0, time: '' })
	// 	case VALUESTOGET.PRESSURE:
	// 		return arr.reduce((acum, curr) => acum.pressure < curr.main.pressure ? { pressure: curr.main.pressure, time: curr.dt_txt } : acum, { pressure: 0, time: '' })
	// 	case VALUESTOGET.HUMIDITY:
	// 		return arr.reduce((acum, curr) => acum.humidity < curr.main.temp ? { humidity: curr.main.temp, time: curr.dt_txt } : acum, { humidity: 0, time: '' })
	// 	default:
	// 		return arr[0]
	// } getting error 'dont have key "temp" on type...'  dunno why
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