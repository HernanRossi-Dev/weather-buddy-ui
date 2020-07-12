import React from 'react'
import { Sunny, PartlyCloudy, SunShower, Cloudy, Rainy, Windy, Snowy, Misty } from '.'
import { IWeatherMain } from '../../interfaces/Weather'

export interface WeatherMap {
  [key: string]: JSX.Element
}

export const setHeight = (height: number, width: number) => (mainDetails: IWeatherMain) => {
  const weatherMap: WeatherMap = {
    'Clear': <Sunny height={height} width={width} />,
    'Clouds': <Cloudy height={height} width={width} />,
    'Thunderstorm': <Cloudy height={height} width={width} />,
    'Snow': <Snowy height={height} width={width} />,
    'Rain': <Rainy height={height} width={width} />,
    'Drizzle': <SunShower height={height} width={width} />,
    'light rain': <SunShower height={height} width={width} />,
    'Squall': <Windy height={height} width={width} />,
    'Tornado': <Windy height={height} width={width} />,
    'Mist': <Misty height={height} width={width} />,
    'Haze': <Misty height={height} width={width} />,
    'Smoke': <Misty height={height} width={width} />,
    'Dust': <Misty height={height} width={width} />,
    'Fog': <Misty height={height} width={width} />,
    'Sand': <Misty height={height} width={width} />,
    'Ash': <Misty height={height} width={width} />,
    'few clouds': <PartlyCloudy height={height} width={width} />,
    'scattered clouds': <PartlyCloudy height={height} width={width} />,
  }
  return weatherMap[mainDetails.description as keyof WeatherMap] || weatherMap[mainDetails.main as keyof WeatherMap]
}
