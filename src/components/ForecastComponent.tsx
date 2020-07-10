import React from 'react'
import GoogleMap from 'google-map-react'
import WeatherWidget from './WeatherWidget'
import { StyledMapContainer } from '../styles/StyledComponents'

import { IWeatherData, IWeatherForecast } from '../interfaces/Weather'
import { Grid, Typography } from '@material-ui/core'
import ForecastWidget from './ForecastWidget'

interface MapProps {
  forecastData?: Array<IWeatherForecast>
  cityName: string
}

export const Forecast = ({ forecastData, cityName }: MapProps) => {
  if (!forecastData) return null
  return (
    <div style={{ margin: 'auto', width: '100%', height: '100%'}}>
      <Typography variant="h5" color="textSecondary" component="p">
        <strong>{cityName}, BC</strong><br/>
        7 day forecast
      </Typography>
      <Grid container spacing={2} direction="column" style={{ height: "100%" }} >
        <Grid container spacing={1} direction="row" style={{ width: '100%', margin: 'auto' }}>
          <Grid item xs={6} lg={6} xl={6}>
            <ForecastWidget weather={forecastData[0]} />
          </Grid>
          <Grid item xs={6} lg={6} xl={6}>
            <ForecastWidget weather={forecastData[1]} />
          </Grid>
        </Grid>
        <Grid container spacing={1} direction="row" style={{ width: '100%', margin: 'auto' }}>
          <Grid item xs={6} lg={6} xl={6}>
            <ForecastWidget weather={forecastData[2]} />
          </Grid>
          <Grid item  xs={6} lg={6} xl={6}>
            <ForecastWidget weather={forecastData[3]} />
          </Grid>
        </Grid>
        <Grid container spacing={1} direction="row" style={{ width: '100%', margin: 'auto' }}>
          <Grid item xs={6} lg={6} xl={6}>
            <ForecastWidget weather={forecastData[4]} />
          </Grid>
          <Grid item  xs={6} lg={6} xl={6}>
            <ForecastWidget weather={forecastData[5]} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
