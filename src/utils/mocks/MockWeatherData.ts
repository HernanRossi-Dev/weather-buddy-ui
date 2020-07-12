import { IWeatherData } from "../../interfaces/Weather";

export const mockWeather: IWeatherData =
{
  "lat": 49.09,
  "lon": -116.51,
  "timezone": "America/Creston",
  "timezone_offset": -25200,
  "current": {
    "dt": 1594451439,
    "sunrise": 1594468441,
    "sunset": 1594525728,
    "temp": 287.72,
    "feels_like": 286.62,
    "pressure": 1021,
    "humidity": 63,
    "dew_point": 280.77,
    "uvi": 7.51,
    "clouds": 1,
    "visibility": 16093,
    "wind_speed": 0.78,
    "wind_deg": 315,
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ]
  },
  "daily": [
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
    },
    {
      "dt": 1594580400,
      "sunrise": 1594554901,
      "sunset": 1594612083,
      "temp": {
        "day": 294.7,
        "min": 282.71,
        "max": 295.36,
        "night": 282.71,
        "eve": 290.93,
        "morn": 283.59
      },
      "feels_like": {
        "day": 291.05,
        "night": 280.74,
        "eve": 289.28,
        "morn": 281.28
      },
      "pressure": 1012,
      "humidity": 34,
      "dew_point": 278.27,
      "wind_speed": 3.61,
      "wind_deg": 219,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": 13,
      "rain": 2.23,
      "uvi": 7.09,
      "dateTime": "Sunday, July 12, 2020"
    },
    {
      "dt": 1594666800,
      "sunrise": 1594641362,
      "sunset": 1594698436,
      "temp": {
        "day": 293.82,
        "min": 281.01,
        "max": 296.9,
        "night": 285.3,
        "eve": 296.76,
        "morn": 281.01
      },
      "feels_like": {
        "day": 291.77,
        "night": 282.71,
        "eve": 292.3,
        "morn": 278.55
      },
      "pressure": 1014,
      "humidity": 35,
      "dew_point": 277.97,
      "wind_speed": 1.22,
      "wind_deg": 175,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": 57,
      "uvi": 7.25,
      "dateTime": "Monday, July 13, 2020"
    },
    {
      "dt": 1594753200,
      "sunrise": 1594727825,
      "sunset": 1594784786,
      "temp": {
        "day": 296.64,
        "min": 281.81,
        "max": 301.27,
        "night": 288.08,
        "eve": 299.87,
        "morn": 281.81
      },
      "feels_like": {
        "day": 294.96,
        "night": 286.16,
        "eve": 296.44,
        "morn": 279.5
      },
      "pressure": 1016,
      "humidity": 30,
      "dew_point": 278.16,
      "wind_speed": 0.77,
      "wind_deg": 152,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": 2,
      "uvi": 7.61,
      "dateTime": "Tuesday, July 14, 2020"
    },
    {
      "dt": 1594839600,
      "sunrise": 1594814290,
      "sunset": 1594871133,
      "temp": {
        "day": 296.99,
        "min": 285.73,
        "max": 300.38,
        "night": 289.16,
        "eve": 300.38,
        "morn": 285.73
      },
      "feels_like": {
        "day": 295.32,
        "night": 287.58,
        "eve": 298.06,
        "morn": 283.72
      },
      "pressure": 1015,
      "humidity": 32,
      "dew_point": 279.62,
      "wind_speed": 1.11,
      "wind_deg": 157,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": 98,
      "uvi": 7.72,
      "dateTime": "Wednesday, July 15, 2020"
    },
    {
      "dt": 1594926000,
      "sunrise": 1594900756,
      "sunset": 1594957479,
      "temp": {
        "day": 301.11,
        "min": 286.05,
        "max": 302.83,
        "night": 292.18,
        "eve": 302.83,
        "morn": 286.05
      },
      "feels_like": {
        "day": 300.46,
        "night": 291.33,
        "eve": 302.14,
        "morn": 284.4
      },
      "pressure": 1014,
      "humidity": 32,
      "dew_point": 283.3,
      "wind_speed": 0.89,
      "wind_deg": 158,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": 57,
      "uvi": 7.02,
      "dateTime": "Thursday, July 16, 2020"
    },
    {
      "dt": 1595012400,
      "sunrise": 1594987223,
      "sunset": 1595043821,
      "temp": {
        "day": 302.5,
        "min": 288.04,
        "max": 305.82,
        "night": 292.5,
        "eve": 305.44,
        "morn": 288.04
      },
      "feels_like": {
        "day": 301.91,
        "night": 291.77,
        "eve": 303.15,
        "morn": 287.08
      },
      "pressure": 1014,
      "humidity": 33,
      "dew_point": 284.68,
      "wind_speed": 1.46,
      "wind_deg": 153,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": 7,
      "uvi": 7.66,
      "dateTime": "Friday, July 17, 2020"
    },
    {
      "dt": 1595098800,
      "sunrise": 1595073692,
      "sunset": 1595130162,
      "temp": {
        "day": 303.21,
        "min": 288.97,
        "max": 303.21,
        "night": 303.21,
        "eve": 303.21,
        "morn": 288.97
      },
      "feels_like": {
        "day": 302.06,
        "night": 302.06,
        "eve": 302.06,
        "morn": 288.09
      },
      "pressure": 1012,
      "humidity": 30,
      "dew_point": 284.24,
      "wind_speed": 1.93,
      "wind_deg": 156,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": 0,
      "uvi": 7.29,
      "dateTime": "Saturday, July 18, 2020"
    }
  ],
  "name": "Creston"
}
