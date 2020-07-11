import React from 'react'
import GoogleMap from 'google-map-react'
import WeatherWidget from './WeatherWidget'
import { StyledMapContainer } from '../styles/StyledComponents'
import { IWeatherData } from '../interfaces/Weather'
import { TIMER_COORDS } from '../constants/locationCoordinates'
import { TimerComponent } from './TimerComponent'

interface MapProps {
  center: {
    lat: number,
    lng: number
  }
  zoom: number,
  weatherData?: Array<IWeatherData>
  isLoading: boolean
}

const mapOptions = {
  disableDoubleClickZoom: true,
  scaleControl: false,
  zoomControl: false,
  panControl: false,
  draggableCursor: 'default',
}
export const RenderMap = ({ zoom, center, weatherData, isLoading }: MapProps) => {
  
  const API_KEY = process.env.REACT_APP_MAPS_API_URL || ''
  const loading = () => {
    if (!weatherData) return null
    return (
      weatherData.map((cityWeather, index) => {
        return (
          <WeatherWidget
            lat={cityWeather.lat}
            lng={cityWeather.lon}
            text={cityWeather.name}
            key={index}
            weatherData={cityWeather.current}
          />
        )
      }
      ))
  }

  const { lat, lng } = TIMER_COORDS
  return (
    <StyledMapContainer>
      <GoogleMap
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        draggable={false}
        options={mapOptions}
        distanceToMouse={(x, y) => 0}
      >
        {loading()}
        <TimerComponent lat={lat} lng={lng} />
      </GoogleMap>
    </StyledMapContainer>
  )
}
