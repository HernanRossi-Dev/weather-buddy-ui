import React from "react"
import { Forecast } from "../ForecastComponent"
import { render } from "@testing-library/react"

describe("Forecast Component", () => {
  it("renders successfully", () => {
    const { container } = render(<Forecast />)
    expect(container).toBeDefined()
  })
})
