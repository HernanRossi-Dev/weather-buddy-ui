import React from "react"
import WeatherWidget from "../WeatherWidget"
import { render } from "@testing-library/react"
import { mockCurrentWeather } from "../../utils/mocks/MockCurrentWeather"

describe("WeatherWidget", () => {
  it("renders successfully", () => {
    const { container } = render(<WeatherWidget weatherData={mockCurrentWeather} text={'Vancouver'}/>)
    expect(container).toBeDefined()
  })
})
