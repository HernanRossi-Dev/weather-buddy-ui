import React from "react"
import { setHeight } from "../WeatherElement"
import { render } from "@testing-library/react"
import { IWeatherMain } from "../../../interfaces/Weather"

describe("WeatherElement", () => {
  it("returns element successfully", () => {
    const weatherDetails: IWeatherMain = {
      id: 9,
      main: 'Clear',
      description: 'clear',
      icon: 'None'
    }
    const setHeightClosure = setHeight(75, 75)
    const element = setHeightClosure(weatherDetails)
    expect(element).toBeDefined()
    expect(element.props).toBeDefined()
    expect(element.props.height).toBe(75)
    expect(element.props.width).toBe(75)
    expect(typeof element.type).toBe('function')
  })
})
