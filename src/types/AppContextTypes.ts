import { IWeatherData } from "../interfaces/Weather"
export type Action =
  |
  {
    type: "SET_WEATHER_DATA"
    payload: Array<IWeatherData>
  }
  

