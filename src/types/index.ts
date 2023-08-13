export type Weather = {
    main: Main,
    weather: WeatherInWeather,
    wind: Wind,
    dt: number,
    dt_txt: string 
}
export type Main = {
    temp:number,
    feels_like: number,
    humidity: number,
    pressure: number,
    temp_max: number,
    temp_min: number
}
export type WeatherInWeather = [{
    main: string,
    description: string,
    icon: string
}]

export type Wind = {
    speed: number, 
    deg: number, 
}

export enum CITIES {
    LONDON = 'london',
    KYIV = 'kyiv',
    PARIS = 'paris',
}