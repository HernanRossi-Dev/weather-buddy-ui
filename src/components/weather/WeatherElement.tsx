import React from 'react'
import { Sunny, PartlyCloudy, SunShower, Cloudy, Rainy, Windy, Snowy, Mist } from '.'
import { IWeatherMain } from '../../interfaces/Weather'

export interface WeatherMap {
  [key: string]: JSX.Element
}

export const setHeight = (height: number, width: number) => (mainDetails: IWeatherMain) => {
  const weatherMap: WeatherMap = {
    'Clear': <Sunny height={height} width={width} />,
    'Clouds': <Cloudy height={height} width={width} />,
    'Snow': <Snowy height={height} width={width} />,
    'Rain': <Rainy height={height} width={width} />,
    'Drizzle': <SunShower height={height} width={width} />,
    'light rain': <SunShower height={height} width={width} />,
    'Squall': <Windy height={height} width={width} />,
    'Mist': <Mist height={height} width={width} />,
    'Haze': <Mist height={height} width={width} />,
    'Smoke': <Mist height={height} width={width} />,
    'Dust': <Mist height={height} width={width} />,
    'Fog': <Mist height={height} width={width} />,
    'Ash': <Mist height={height} width={width} />,
    'few clouds': <PartlyCloudy height={height} width={width} />,
    'scattered clouds': <PartlyCloudy height={height} width={width} />,
  }
  return weatherMap[mainDetails.description as keyof WeatherMap] || weatherMap[mainDetails.main as keyof WeatherMap]
}
