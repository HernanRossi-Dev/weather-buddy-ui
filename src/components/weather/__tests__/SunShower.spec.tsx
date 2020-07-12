import React from "react"
import { SunShower } from "../SunShower"
import { render } from "@testing-library/react"

const getProps = (height = 25, width = 25) => {
  return { height, width }
}
describe("SunShower", () => {
  it("renders successfully", () => {
    const { container } = render(<SunShower {...getProps()} />)
    expect(container).toBeDefined()
  })
})
