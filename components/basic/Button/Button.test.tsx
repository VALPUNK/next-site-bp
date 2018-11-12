import * as React from "react"
import ReactDOM from "react-dom"
import Button from "."

test("renders a button with text", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Button>Some Text</Button>, div)
  expect(div.querySelector("span").textContent).toBe("Some Text")
})
