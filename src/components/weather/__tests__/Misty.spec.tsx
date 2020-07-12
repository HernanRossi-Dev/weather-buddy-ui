import React from "react"
import { Misty } from "../Misty"
import { render } from "@testing-library/react"

const getProps = (height = 25, width = 25) => {
  return { height, width }
}
describe("Misty", () => {
  it("renders successfully", () => {
    const { container } = render(<Misty {...getProps()} />)
    expect(container).toBeDefined()
  })
})
