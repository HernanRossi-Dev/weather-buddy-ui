import React from 'react'
import GoogleMap from 'google-map-react'
import WeatherWidget from './WeatherWidget'
import { CITY_LOCATIONS } from '../constants/locationCoordinates'
import { LoadingContainer, LogoLoading, StyledMapContainer } from '../styles/StyledComponents'

import { IWeatherData } from '../interfaces/Weather'

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
  console.log("IN render: ", weatherData)
  const loading = () => {
    if (isLoading || !weatherData) {
      return (
        <LoadingContainer >
          <LogoLoading />
        </LoadingContainer>
      )
    }
    return (
      weatherData.map((cityWeather, index) => {
        return (
          <WeatherWidget
            lat={cityWeather.lat}
            lng={cityWeather.lon}
            text={cityWeather.name}
            key={index}
            currentWeather={cityWeather.current}
          />
        )}
      ))
  }

  return (
    <StyledMapContainer>
      <GoogleMap
        //Add this key to .env and restrict access to it
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        draggable={false}
        options={mapOptions}
        distanceToMouse={(x, y) => 0}
      >
        {loading()}
      </GoogleMap>
    </StyledMapContainer>
  )
}
