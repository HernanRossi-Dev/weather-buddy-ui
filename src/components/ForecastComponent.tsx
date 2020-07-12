import React, { useEffect, useState } from 'react'
import { useAppState } from '../context/AppStateContext'
import { IWeatherForecast } from '../interfaces/Weather'
import { Grid, Typography } from '@material-ui/core'
import ForecastWidget from './ForecastWidget'

export const Forecast = (): JSX.Element => {
  const { state } = useAppState()

  const [forecastData, setforecastData] = useState<Array<IWeatherForecast> | undefined>(undefined)
  const [forecastCity, setforecastCity] = useState('')

  useEffect(() => {
    if (!state || !state.weatherData) return
    const { forecastIndex } = state
    const forecast = state.weatherData[forecastIndex].daily
    const forecastCity = state.weatherData[forecastIndex].name
    setforecastCity(forecastCity)
    setforecastData(forecast)
  })

  const RenderForecast = () => {
    if (!forecastData) return null
    return (
      <Grid container spacing={1} direction="row" style={{ height: "100%" }} justify={"center"} alignContent={"center"} alignItems={'center'}>
        <Grid item xs={6} lg={6} xl={6}>
          <ForecastWidget weatherData={forecastData[0]} />
        </Grid>
        <Grid item xs={6} lg={6} xl={6}>
          <ForecastWidget weatherData={forecastData[1]} />
        </Grid>
        <Grid item xs={6} lg={6} xl={6}>
          <ForecastWidget weatherData={forecastData[2]} />
        </Grid>
        <Grid item xs={6} lg={6} xl={6}>
          <ForecastWidget weatherData={forecastData[3]} />
        </Grid>
        <Grid item xs={6} lg={6} xl={6}>
          <ForecastWidget weatherData={forecastData[4]} />
        </Grid>
        <Grid item xs={6} lg={6} xl={6}>
          <ForecastWidget weatherData={forecastData[5]} />
        </Grid>
      </Grid>
    )
  }
  return (
    <div style={{ marginTop: "10px", width: '100%' }}>
      <Typography variant="h5" color="textSecondary" component="p" align={"center"} style={{ paddingTop: "15px", marginBottom: '20px' }}>
        <strong>{forecastCity}, BC</strong><br />
        Forecast
      </Typography>
      <RenderForecast />
    </div >
  )
}
