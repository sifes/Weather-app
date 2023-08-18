export type Weather = {
	main: Main;
	weather: WeatherInWeather;
	wind: Wind;
	dt: number;
	dt_txt: string;
	pop: number;
	clouds: {
		all: number;
	};
};
export type Main = {
	temp: number;
	feels_like: number;
	humidity: number;
	pressure: number;
	temp_max: number;
	temp_min: number;
};
export type WeatherInWeather = [
	{
		main: string;
		description: string;
		icon: string;
	}
];

export type Wind = {
	speed: number;
	deg: number;
};

export enum CITIES {
	LONDON = 'London',
	KYIV = 'Kyiv',
	PARIS = 'Paris',
	ROME = 'Rome',
	TOKYO = 'Tokyo',
}
export enum VALUESTOGET {
	TEMP = 'temp',
	WIND_SPEED = 'windSpeed',
	PRESSURE = 'pressure',
	HUMIDITY = 'humidity',
}
export interface ICityOption {
	value: string;
	label: string;
}
