import React from "react"
import App from "./App"
import { render } from "@testing-library/react"

jest.mock("./components/MapContainer", () => ({
  MapContainer: () => <div>Map Container</div>
  }))

describe("App", () => {
  it("renders successfully", () => {
    const { container } = render(<App />)
    expect(container).toBeDefined()
  })
})
