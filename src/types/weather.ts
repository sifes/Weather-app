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
  },
];

export type Wind = {
  speed: number;
  deg: number;
};
