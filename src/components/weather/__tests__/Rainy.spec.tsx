import React from "react"
import { Rainy } from "../Rainy"
import { render } from "@testing-library/react"

const getProps = (height = 25, width = 25) => {
  return { height, width }
}
describe("Rainy", () => {
  it("renders successfully", () => {
    const { container } = render(<Rainy {...getProps()} />)
    expect(container).toBeDefined()
  })
})
