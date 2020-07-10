import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import { Typography } from '@material-ui/core'
import { WeatherForecastCard } from '../styles/StyledComponents'
import { IWeatherForecast, IWeatherMain } from '../interfaces/Weather'
import { setHeight } from './weather/WeatherElement'

interface ForecastWidgetProps {
  weatherData: IWeatherForecast
}

const ForecastWidget = ({ weatherData }: ForecastWidgetProps) => {
  const [maxTemp, setMaxTemp] = useState(0)
  const [minTemp, setMinTemp] = useState(0)
  const [windSpeed, setWindSpeed] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [mainDetails, setMainDetails] = useState<IWeatherMain | null>(null)
  const [icon, setIcon] = useState<JSX.Element | null>(null)
  const [date, setDate] = useState('')

  useEffect(() => {
    const maxTemp: number = parseFloat((weatherData.temp.max - 273.15).toPrecision(3))
    const minTemp: number = parseFloat((weatherData.temp.min - 273.15).toPrecision(3))
    const currWind: number = parseFloat((weatherData.wind_speed * 3.6).toPrecision(3))
    const humidity: number = weatherData.humidity
    const mainWeatherDetails = weatherData.weather[0]
    const getWeatherElement = setHeight(100, 100)
    if (mainWeatherDetails) {
      const iconVisuals = getWeatherElement(mainWeatherDetails)
      setIcon(iconVisuals)
    }

    const dateRaw = new Date(weatherData.dateTime)
    const dateTimeFormat = moment(dateRaw).format("ddd MMM Do")
    setDate(dateTimeFormat)
    setMaxTemp(maxTemp)
    setMinTemp(minTemp)
    setWindSpeed(currWind)
    setHumidity(humidity)
    setMainDetails(mainWeatherDetails)
  }, [weatherData])

  return (
    <WeatherForecastCard>
      <Card>
        <CardHeader
          avatar={
            <div style={{ marginRight: '-20px' }}>
              {icon}
            </div>
          }
          title={
            <Typography variant="body1" color="textSecondary" component="p">
              <strong>{date}</strong>
            </Typography>}
          subheader={
            <Typography variant="body1" color="textSecondary" component="p">
              Max: <strong>{maxTemp}{'\u00b0'}C</strong><br />
              Min: <strong>{minTemp}{'\u00b0'}C</strong><br />
            </Typography>}
          style={{ marginTop: '-20px', marginBottom: '-40px' }}
        />
        <CardContent style={{ marginBottom: '-20px' }}>
          <Typography variant="body1" color="textSecondary" component="p" style={{ marginTop: '15px' }}>
            Conditions: <strong>{mainDetails?.main}</strong><br />
            Details: <strong>{mainDetails?.description}</strong><br />
            Wind: <strong>{windSpeed} km/h</strong><br />
            Humidity: <strong>{humidity}%</strong>
          </Typography>
        </CardContent>
      </Card>
    </WeatherForecastCard>
  )
}

export default ForecastWidget
