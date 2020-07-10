import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import { Sunny, PartlyCloudy, SunShower, Cloudy, Rainy, Windy, Snowy } from './weather'

import { Typography } from '@material-ui/core'
import { WeatherCard } from '../styles/StyledComponents'
import { IWeatherCurrent, IWeatherMain } from '../interfaces/Weather'
import { Mist } from './weather/MIst'

interface WeatherWidgetyProps {
  text: string
  lat: number
  lng: number
  currentWeather: IWeatherCurrent
}
interface WeatherMap {
  [key: string]: JSX.Element
}
const weatherMap: WeatherMap = {
  'Clear': <Sunny height={75} width={75} />,
  'Clouds': <Cloudy height={75} width={75} />,
  'Snow': <Snowy height={75} width={75} />,
  'Rain': <Rainy height={75} width={75} />,
  'Drizzle': <SunShower height={75} width={75} />,
  'light rain': <SunShower height={75} width={75} />,
  'Squall': <Windy height={75} width={75} />,
  'Mist': <Mist height={75} width={75} />,
  'Haze': <Mist height={75} width={75} />,
  'Smoke': <Mist height={75} width={75} />,
  'Dust': <Mist height={75} width={75} />,
  'Fog': <Mist height={75} width={75} />,
  'Ash': <Mist height={75} width={75} />,
  'few clouds': <PartlyCloudy height={75} width={75} />,
  'scattered clouds': <PartlyCloudy height={75} width={75} />,
}

const WeatherWidget = ({ text, currentWeather }: WeatherWidgetyProps) => {
  const [currentTemp, setCurrentTemp] = useState(0)
  const [currentTempFeel, setCurrentTempFeel] = useState(0)
  const [currentWind, setCurrentWind] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [currentMain, setCurrentMain] = useState<IWeatherMain | null>(null)

  useEffect(() => {
    const currTemp: number = parseFloat((currentWeather.temp - 273.15).toPrecision(3))
    const currTempFeel: number = parseFloat((currentWeather.feels_like - 273.15).toPrecision(3))
    const currWind: number = parseFloat((currentWeather.wind_speed * 3.6).toPrecision(3))
    const humidity: number = currentWeather.humidity
    setCurrentTemp(currTemp)
    setCurrentTempFeel(currTempFeel)
    setCurrentWind(currWind)
    setHumidity(humidity)
    setCurrentMain(currentWeather.weather[0])
  }, [currentWeather])

  return (
    <WeatherCard>
      <Card>
        <CardHeader
          avatar={
            <div style={{ marginRight: '-20px' }}>
              {currentMain ? weatherMap[currentMain.description as keyof WeatherMap] || weatherMap[currentMain.main as keyof WeatherMap] : null}
            </div>
          }
          title={
            <Typography variant="body1" color="textSecondary" component="p">
              <strong>{text}</strong>
            </Typography>}
          subheader={
            <Typography variant="h6" color="textSecondary" component="p">
              <strong>{currentTemp}{'\u00b0'}C</strong><br/>
            </Typography>}
          style={{ marginTop: '-20px', marginBottom: '-40px' }}
        />
        <CardContent style={{ marginBottom: '-20px' }}>
          <Typography variant="body2" color="textSecondary" component="p">
            Conditions: <strong>{currentMain?.main}</strong><br />
            Wind: <strong>{currentWind} km/h</strong><br />
            Humidity: <strong>{humidity}%</strong>
          </Typography>
        </CardContent>
      </Card>
    </WeatherCard>
  )
}

export default WeatherWidget




