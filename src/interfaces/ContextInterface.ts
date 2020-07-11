import { IWeatherData } from "./Weather";

export interface AppState {
  weatherData?: Array<IWeatherData>,
  forecastIndex: number,
  dataSetTime: Date
}
