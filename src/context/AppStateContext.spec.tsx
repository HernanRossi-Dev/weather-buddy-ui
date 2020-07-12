import React from "react"
import { AppStateProvider } from "./AppStateContext"
import { render } from "@testing-library/react"

describe("AppStateProvider", () => {
  it("renders successfully", () => {
    const { container } = render(<AppStateProvider />)
    expect(container).toBeDefined()
  })
})

