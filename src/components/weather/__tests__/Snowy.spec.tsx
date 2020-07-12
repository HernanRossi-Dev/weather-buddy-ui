import React from "react"
import { Snowy } from "../Snowy"
import { render } from "@testing-library/react"

const getProps = (height = 25, width = 25) => {
  return { height, width }
}
describe("Snowy", () => {
  it("renders successfully", () => {
    const { container } = render(<Snowy {...getProps()} />)
    expect(container).toBeDefined()
  })
})
