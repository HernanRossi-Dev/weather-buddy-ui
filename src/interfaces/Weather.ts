
export interface IWeatherMain {
  id: number,
  main: string,
  description: string,
  icon: string
}
export interface WeatherComponentProps {
  height: number
  width: number
}

interface Temp {
  day: number
  eve: number
  max: number
  min: number
  morn: number
  night: number
}

export interface IWeatherBase {
  feels_like: number | Array<number>
  temp: number | Temp
}
export interface IWeatherCurrent extends IWeatherBase {
  clouds: number
  dew_point: number
  dt: number
  feels_like: number
  humidity: number
  pressure: number
  sunrise: number
  sunset: number
  temp: number
  uvi: number
  visibility: number
  weather: Array<IWeatherMain>
  wind_deg: number
  wind_speed: number
}

export interface IWeatherForecast extends IWeatherBase {
  dateTime: string
  feels_like: Array<number>
  temp: Temp
  clouds: number
  dew_point: number
  dt: number
  humidity: number
  pressure: number
  sunrise: number
  sunset: number
  uvi: number
  visibility: number
  weather: Array<IWeatherMain>
  wind_deg: number
  wind_speed: number
}

export interface IWeatherData {
  current: IWeatherCurrent
  daily: Array<IWeatherForecast>
  lat: number
  lon: number
  name: string
}