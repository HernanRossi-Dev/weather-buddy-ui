import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import { Typography } from '@material-ui/core'
import { WeatherCard } from '../styles/StyledComponents'
import { IWeatherCurrent, IWeatherMain } from '../interfaces/Weather'
import { setHeight } from './weather/WeatherElement'

interface WeatherWidgetProps {
  text: string
  lat?: number
  lng?: number
  weatherData: IWeatherCurrent
}

const WeatherWidget = ({ text, weatherData }: WeatherWidgetProps) => {
  const [currentTemp, setCurrentTemp] = useState(0)
  const [currentWind, setCurrentWind] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [currentMain, setCurrentMain] = useState<IWeatherMain | null>(null)
  const [icon, setIcon] = useState<JSX.Element | null>(null)

  useEffect(() => {
    const currTemp: number = parseFloat((weatherData.temp - 273.15).toPrecision(3))
    const currWind: number = parseFloat((weatherData.wind_speed * 3.6).toPrecision(3))
    const humidity: number = weatherData.humidity
    const mainWeatherDetails = weatherData.weather[0]
    const getWeatherElement = setHeight(75, 75)
    if (mainWeatherDetails) {
      const iconVisuals = getWeatherElement(mainWeatherDetails)
      setIcon(iconVisuals)
    }

    setCurrentTemp(currTemp)
    setCurrentWind(currWind)
    setHumidity(humidity)
    setCurrentMain(weatherData.weather[0])
  }, [weatherData])

  return (
    <WeatherCard>
      <Card>
        <CardHeader
          avatar={
            <div style={{ marginRight: '-20px' }}>
              {icon}
            </div>
          }
          title={
            <Typography variant="body1" color="textSecondary" component="p">
              <strong>{text}</strong>
            </Typography>}
          subheader={
            <Typography variant="h6" color="textSecondary" component="p">
              <strong>{currentTemp}{'\u00b0'}C</strong><br />
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
