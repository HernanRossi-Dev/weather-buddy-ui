import { IWeatherForecast } from "../../interfaces/Weather";

export const mockForecast: IWeatherForecast =
{
  "dt": 1594494000,
  "sunrise": 1594468441,
  "sunset": 1594525728,
  "temp": {
    "day": 297.64,
    "min": 284.14,
    "max": 302.45,
    "night": 288.03,
    "eve": 301.37,
    "morn": 284.14
  },
  "feels_like": {
    "day": 295.88,
    "night": 286.93,
    "eve": 298.12,
    "morn": 282.87
  },
  "pressure": 1016,
  "humidity": 32,
  "dew_point": 279.88,
  "wind_speed": 1.42,
  "wind_deg": 145,
  "weather": [
    {
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02d"
    }
  ],
  "clouds": 20,
  "uvi": 7.51,
  "dateTime": "Saturday, July 11, 2020"
}