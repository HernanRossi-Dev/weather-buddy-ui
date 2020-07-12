import React from "react"
import { Cloudy } from "../Cloudy"
import { render } from "@testing-library/react"

const getProps = (height = 25, width = 25) => {
  return { height, width }
}
describe("Cloudy", () => {
  it("renders successfully", () => {
    const { container } = render(<Cloudy {...getProps()} />)
    expect(container).toBeDefined()
  })
})
