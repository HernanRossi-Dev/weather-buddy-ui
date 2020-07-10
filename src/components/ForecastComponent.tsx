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
    <div style={{ marginTop: "10px", width: '100%' }}>
      <Typography variant="h5" color="textSecondary" component="p" align={"center"} style={{ paddingTop: "15px", marginBottom: '20px'}}>
        <strong>{cityName}, BC</strong><br />
        Forecast
      </Typography>
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
      {/* <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between', alignItems: 'baseline', margin: 'auto' }}>

        <Grid container spacing={10} style={{ height: "100%", width: '100%', margin: 'auto' }} >
          <Grid item xs={6} lg={6} xl={6}>
            <ForecastWidget weatherData={forecastData[0]} />
          </Grid>
          <Grid item xs={6} lg={6} xl={6}>
            <ForecastWidget weatherData={forecastData[2]} />
          </Grid>
          <Grid item xs={6} lg={6} xl={6}>
            <ForecastWidget weatherData={forecastData[4]} />
          </Grid>
          <Grid item xs={6} lg={6} xl={6}>
            <ForecastWidget weatherData={forecastData[6]} />
          </Grid>
          <Grid item xs={6} lg={6} xl={6}>
            <ForecastWidget weatherData={forecastData[1]} />
          </Grid>
          <Grid item xs={6} lg={6} xl={6}>
            <ForecastWidget weatherData={forecastData[3]} />
          </Grid>
          <Grid item xs={6} lg={6} xl={6}>
            <ForecastWidget weatherData={forecastData[5]} />
          </Grid>
        </Grid>
      </div> */}
    </div >
  )
}
