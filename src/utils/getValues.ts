import { Weather, VALUESTOGET } from "../types";

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