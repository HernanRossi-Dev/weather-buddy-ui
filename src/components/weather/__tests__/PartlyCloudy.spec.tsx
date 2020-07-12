import React from "react"
import { PartlyCloudy } from "../PartlyCloudy"
import { render } from "@testing-library/react"

const getProps = (height = 25, width = 25) => {
  return { height, width }
}
describe("PartlyCloudy", () => {
  it("renders successfully", () => {
    const { container } = render(<PartlyCloudy {...getProps()} />)
    expect(container).toBeDefined()
  })
})
