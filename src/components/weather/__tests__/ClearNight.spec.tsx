import React from "react"
import { ClearNight } from "../ClearNight"
import { render } from "@testing-library/react"

const getProps = (height = 25, width = 25) => {
  return { height, width }
}
describe("ClearNight", () => {
  it("renders successfully", () => {
    const { container } = render(<ClearNight {...getProps()} />)
    expect(container).toBeDefined()
  })
})
