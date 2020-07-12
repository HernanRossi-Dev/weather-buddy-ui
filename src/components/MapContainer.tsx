import React, { useEffect, useLayoutEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { Grid, Paper } from '@material-ui/core'
import { RenderMap } from './RenderMap'
import { BC_CENTER } from '../constants/locationCoordinates'
import { StyledAppContainer, StyledSideContainer } from '../styles/StyledComponents'
import Logo from '../assets/Sun.png'
import { IWeatherData } from '../interfaces/Weather'
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

const DESKTOP_ZOOM_LARGE = 6
// const DESKTOP_ZOOM_XLARGE = 7
const LAPTOP_ZOOM = 5.6

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export const MapContainer = () => {
  const { state, dispatch } = useAppState()
  const classes = useStyles()
  const [loading, setLoading] = useState(true)
  const [weatherData, setWeatherData] = useState<Array<IWeatherData> | undefined>(undefined)

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);
  const [width, height] = useWindowSize();

  useEffect(() => {
    setDesktop(width > 1450)
  },[width]);

  useEffect(() => {
    setLoading(true)
    async function launch() {
      const currentTime = new Date()
      const setDataTime = new Date(state.dataSetTime)
      const dataAge = Math.abs(currentTime.getTime() - setDataTime.getTime())
      const dataAgeMinutes = Math.round(dataAge / 60000)
      if (state && state.weatherData && dataAgeMinutes < 30) {
        setWeatherData(state.weatherData)
      } else {
        const url = `${process.env.REACT_APP_API_URL}api/weather`
        const result = await axios.get(url)
        if (!result || !result.data) return
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

  return (
    <div style={{ width: '99%', margin: 'auto', height: '100%' }}>
      {isDesktop ? (
        <Grid container spacing={1} direction="row" style={{ height: '100%' }} >
          <Grid item xs={8} sm={8} lg={8} xl={9} >
            <StyledAppContainer>
              <RenderMap
                center={BC_CENTER}
                zoom={DESKTOP_ZOOM_LARGE}
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
                <Forecast />
              </Paper>
            </StyledSideContainer>
          </Grid>
        </Grid>
      )
        :
        (
          <StyledAppContainer>
            <RenderMap
              center={BC_CENTER}
              zoom={LAPTOP_ZOOM}
              weatherData={weatherData}
              isLoading={loading}
            />
          </StyledAppContainer>
        )
      }
    </div >
  )
}
