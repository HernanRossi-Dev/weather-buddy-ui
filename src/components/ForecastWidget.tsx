import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import { Sunny, PartlyCloudy, SunShower, Cloudy, Rainy, Windy, Snowy } from './weather'
import { Typography } from '@material-ui/core'
import { WeatherCard } from '../styles/StyledComponents'
import { IWeatherForecast, IWeatherMain } from '../interfaces/Weather'
import { Mist } from './weather/MIst'

interface ForecastWidgetProps {
  weather: IWeatherForecast
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

const ForecastWidget = ({ weather }: ForecastWidgetProps) => {
  const [maxTemp, setMaxTemp] = useState(0)
  const [minTemp, setMinTemp] = useState(0)
  const [currentWind, setCurrentWind] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [currentMain, setCurrentMain] = useState<IWeatherMain | null>(null)

  useEffect(() => {
    const maxTemp: number = parseFloat((weather.temp.max - 273.15).toPrecision(3))
    const minTemp: number = parseFloat((weather.temp.min - 273.15).toPrecision(3))
    const currWind: number = parseFloat((weather.wind_speed * 3.6).toPrecision(3))
    const humidity: number = weather.humidity
    setMaxTemp(maxTemp)
    setMinTemp(minTemp)
    setCurrentWind(currWind)
    setHumidity(humidity)
    setCurrentMain(weather.weather[0])
  }, [weather])

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
              <strong>{weather.dateTime}</strong>
            </Typography>}
          subheader={
            <Typography variant="body1" color="textSecondary" component="p">
              Max: <strong>{maxTemp}{'\u00b0'}C</strong><br/>
              Min: <strong>{minTemp}{'\u00b0'}C</strong><br/>
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

export default ForecastWidget




