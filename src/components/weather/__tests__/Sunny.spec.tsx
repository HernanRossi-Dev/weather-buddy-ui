import React from "react"
import { Sunny } from "../Sunny"
import { render } from "@testing-library/react"

const getProps = (height = 25, width = 25) => {
  return { height, width }
}
describe("Sunny", () => {
  it("renders successfully", () => {
    const { container } = render(<Sunny {...getProps()} />)
    expect(container).toBeDefined()
  })
})
