import React from "react"
import { Windy } from "../Windy"
import { render } from "@testing-library/react"

const getProps = (height = 25, width = 25) => {
  return { height, width }
}
describe("Windy", () => {
  it("renders successfully", () => {
    const { container } = render(<Windy {...getProps()} />)
    expect(container).toBeDefined()
  })
})
