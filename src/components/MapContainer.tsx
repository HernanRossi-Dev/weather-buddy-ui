import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { Grid, Paper } from '@material-ui/core'
import { RenderMap } from './RenderMap'
import { BC_CENTER } from '../constants/locationCoordinates'
import { StyledAppContainer } from '../styles/StyledComponents'
import Logo from '../assets/Sun.png'
import { IWeatherData, IWeatherForecast } from '../interfaces/Weather'
import { useAppState } from '../context/AppStateContext'
import { Forecast } from './ForecastComponent'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: '25px',
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
  const [displayIndex, setDisplayIndex] = useState(0)

  useEffect(() => {
    setLoading(true)
    async function launch() {
      const url = `${process.env.REACT_APP_API_URL}api/weather`
      if (state.weatherData) {
        setWeatherData(state.weatherData)
      } else {
        console.log("Refresh data")
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
  }, []);

  useEffect(() => {
    if(!weatherData) return
    const forecast = weatherData[0].daily
    const forecastCity = weatherData[0].name
    setforecastCity(forecastCity)
    setforecastData(forecast)
  }, [weatherData])

  return (
    <StyledAppContainer>
      <Grid container spacing={0} direction="row" style={{ height: "100%" }} >
        <Grid item xs={9} lg={9} xl={9} >
          <RenderMap
            center={BC_CENTER}
            zoom={DEFAULT_ZOOM}
            weatherData={weatherData}
            isLoading={loading}
          />
        </Grid>
        <Grid item xs lg xl >
          <Grid container spacing={2} direction="column" style={{ width: '100%', margin: 'auto', height: '100%' }}>
            <Grid item xs lg xl style={{ width: '100%', margin: 'auto', height: '100%' }}>
              <Paper className={classes.paper}>
                <strong>North Coast Pizza </strong><br />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', marginTop: '-10px', marginBottom: '-10px' }}>
                  Weather <img src={Logo} style={{ height: '100px', width: '100px' }} /> Buddy</div>
              </Paper>
            </Grid>
            <Grid item xs={10} lg={10} xl={10} >
              <Paper className={classes.paper} style={{ width: '100%', margin: 'auto', height: '100%' }}>
               <Forecast forecastData={forecastData} cityName={forecastCity}/>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledAppContainer>
  )
}
