import React from "react"
import ForecastWidget from "../ForecastWidget"
import { render } from "@testing-library/react"
import { mockForecast } from "../../utils/mocks/MockForecastData"

describe("ForecastWidget", () => {
  it("renders successfully", () => {
    const { container } = render(<ForecastWidget weatherData={mockForecast} />)
    expect(container).toBeDefined()
  })
})
