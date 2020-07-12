import React from "react"
import { TimerComponent } from "../TimerComponent"
import { render } from "@testing-library/react"

describe("TimerComponent", () => {
  it("renders successfully", () => {
    const { container } = render(<TimerComponent lat={49} lng={-128}/>)
    expect(container).toBeDefined()
  })
})
