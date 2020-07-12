import React from "react"
import { MapContainer } from "../MapContainer"
import axios from 'axios'
import { render } from "@testing-library/react"

import * as Context from '../../context/AppStateContext'
import { mockWeather } from "../../utils/mocks/MockWeatherData"
jest.mock('../../context/AppStateContext')

const mockedContext = Context as jest.Mocked<typeof Context>
let mock: any
let realUseContext: any
jest.mock('@material-ui/core/styles', () => ({
  withStyles: (_styles: any) => (component: any) => component,
  makeStyles: (_styles: any) => (component: any) => component,
}))
jest.mock("../RenderMap", () => ({
  RenderMap: () => <div>RenderMap</div>
}))
jest.mock("../ForecastComponent", () => ({
  Forecast: () => <div>Forecast</div>
}))


beforeEach(() => {
  mock = jest.spyOn(axios, 'get');
  realUseContext = React.useContext
})

afterEach(() => {
  React.useContext = realUseContext
  mock.mockRestore()
})

describe("MapContainer", () => {
  describe("No cache", () => {
    beforeEach(() => {
      mockedContext.useAppState.mockReturnValue({
        state: {
          weatherData: undefined,
          forecastIndex: 0,
          dataSetTime: new Date()
        },
        dispatch: () => jest.fn()
      })
    })
    
    it("renders successfully", () => {
      mock.mockResolvedValue({ data: { current: 'Current' } })
      const { container } = render(<MapContainer />)
      expect(container).toBeDefined()
    })
    it("fetches data", () => {
      mock.mockResolvedValue({ data: { current: 'Current' } })
      const { container } = render(<MapContainer />)
      expect(container).toBeDefined()
      expect(mock).toBeCalledWith(`${process.env.REACT_APP_API_URL}api/weather`)
    })
  })

  describe("With cache", () => {
    beforeEach(() => {
      mockedContext.useAppState.mockReturnValue({
        state: {
          weatherData: [mockWeather],
          forecastIndex: 0,
          dataSetTime: new Date()
        },
        dispatch: () => jest.fn()
      })
    })
    it("doesn't fetches data with cache", () => {
      mock.mockResolvedValue({ data: { current: 'Current' } })
      const { container } = render(<MapContainer />)
      expect(container).toBeDefined()
      expect(mock).not.toBeCalled()
    })
  })
})
