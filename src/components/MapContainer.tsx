import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { Grid, Paper } from '@material-ui/core'
import { RenderMap } from './RenderMap'
import { BC_CENTER } from '../constants/locationCoordinates'
import { StyledAppContainer } from '../styles/StyledComponents'
import Logo from '../assets/Sun.png'

import { Sunny, PartlyCloudy, SunShower, Cloudy, Rainy, Windy, Snowy } from './weather'
import { IWeatherData } from '../interfaces/Weather'
import { ClearNight } from './weather/ClearNight'
import { useAppState } from '../context/AppStateContext'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: '25px',
    width: '100%'
  },
}))


export const MapContainer = () => {
  const { state, dispatch } = useAppState()

  const DEFAULT_ZOOM = 6
  const classes = useStyles()
  const [loading, setLoading] = useState(true)
  const [weatherData, setWeatherData] = useState<Array<IWeatherData> | undefined>(undefined)

  useEffect(() => {
    setLoading(true)
    async function launch() {
      const url = `${process.env.REACT_APP_API_URL}api/weather`
      if (state.weatherData) {
        console.log("Don't refresh data", state.weatherData)
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
        <Grid item xs lg xl style={{ margin: "auto", }} >
          <Grid container spacing={2} direction="column" style={{ width: '100%', margin: 'auto' }}>
            <Grid item xs lg xl>
              <Paper className={classes.paper}>
                North Coast Pizza <br />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>Weather  <img src={Logo} style={{ height: '100px', width: '100px' }} /> Buddy</div>
              </Paper>
            </Grid>
            <Grid item xs={10} lg={10} xl={10}  >
              <Paper className={classes.paper}>
                <Sunny height={85} width={85} />
                <PartlyCloudy height={85} width={85} />
                <SunShower height={85} width={85} />
                <Cloudy height={85} width={85} />
                <Rainy height={85} width={85} />
                <Windy height={85} width={85} />
                <Snowy height={85} width={85} />
                <ClearNight height={85} width={85} />
              </Paper>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </StyledAppContainer>
  )
}
