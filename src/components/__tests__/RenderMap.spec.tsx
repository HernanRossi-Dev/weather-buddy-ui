import React from "react"
jest.mock('google-map-react')
import GoogleMap from 'google-map-react'
import { RenderMap } from "../RenderMap"
import { render } from "@testing-library/react"
import { IWeatherData } from "../../interfaces/Weather"
import { mockWeather } from "../../utils/mocks/MockWeatherData"

jest.mock("../WeatherWidget", () => ({
  WeatherWidget: () => <div>WeatherWidget</div>
}))
jest.mock("../TimerComponent", () => ({
  TimerComponent: () => <div>TimerComponent</div>
}))

const createProps = (weatherData?: Array<IWeatherData>, isLoading = false, lat = 49, lng = -125, ) => {
  return {
    center: { lat, lng},
    zoom: 6,
    weatherData,
    isLoading
  }
}

describe("RenderMap", () => {
  it("renders successfully", () => {
    const { container } = render(<RenderMap {...createProps()}/>)
    expect(container).toBeDefined()
  })
  it("renders with data", () => {
    const { container } = render(<RenderMap {...createProps([mockWeather])}/>)
    expect(container).toBeDefined()
  })

})
