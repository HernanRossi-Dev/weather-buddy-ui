import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { Grid, Paper } from '@material-ui/core'
import { RenderMap } from './RenderMap'
import { BC_CENTER } from '../constants/locationCoordinates'
import { StyledAppContainer, StyledSideContainer } from '../styles/StyledComponents'
import Logo from '../assets/Sun.png'
import { IWeatherData, IWeatherForecast } from '../interfaces/Weather'
import { useAppState } from '../context/AppStateContext'
import { Forecast } from './ForecastComponent'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paperTitle: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: '25px',
  },
  paperForecast: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: 'fit-content',
    paddingBottom: '15px'
  },
}))

const DEFAULT_ZOOM = 6

export const MapContainer = () => {
  const { state, dispatch } = useAppState()
  const classes = useStyles()
  const [loading, setLoading] = useState(true)
  const [weatherData, setWeatherData] = useState<Array<IWeatherData> | undefined>(undefined)
  const [forecastData, setforecastData] = useState<Array<IWeatherForecast> | undefined>(undefined)
  const [forecastCity, setforecastCity] = useState('')

  useEffect(() => {
    setLoading(true)
    async function launch() {
      if (state.weatherData) {
        setWeatherData(state.weatherData)
      } else {
        const url = `${process.env.REACT_APP_API_URL}api/weather`
        const result = await axios.get(url)
        if (!result) return
        const data = result.data.data as Array<IWeatherData>
        if (!data || data.length < 1) return
        setWeatherData(data)
        dispatch({
          type: "SET_WEATHER_DATA",
          payload: data
        })
      }
      setLoading(false)
    }
    launch()
  });

  useEffect(() => {
    if (!state.weatherData) return
    const { forecastIndex } = state
    const forecast = state.weatherData[forecastIndex].daily
    const forecastCity = state.weatherData[forecastIndex].name
    setforecastCity(forecastCity)
    setforecastData(forecast)
  })

  return (
    <div style={{ width: '99%', margin: 'auto', height: '100%' }}>
      <Grid container spacing={1} direction="row" style={{ height: '100%' }} >
        <Grid item xs={8} sm={8} lg={8} xl={9} >
          <StyledAppContainer>
            <RenderMap
              center={BC_CENTER}
              zoom={DEFAULT_ZOOM}
              weatherData={weatherData}
              isLoading={loading}
            />
          </StyledAppContainer>
        </Grid>
        <Grid item xs sm lg xl >
          <StyledSideContainer>
            <Paper className={classes.paperTitle} >
              <strong>North Coast Pizza </strong><br />
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>
                Weather <img src={Logo} style={{ height: '25%', width: '25%' }} /> Buddy</div>
            </Paper >
            <Paper className={classes.paperForecast}  >
              <Forecast forecastData={forecastData} cityName={forecastCity} />
            </Paper>
          </StyledSideContainer>
        </Grid>
      </Grid>
    </div >
  )
}
