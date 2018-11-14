import "jest-dom/extend-expect"
import * as React from "react"
import { render } from "react-testing-library"
import "react-testing-library/cleanup-after-each"
import Button from "."

test("renders a button with text", () => {
  const { getByText } = render(<Button>Some Tet</Button>)
  const button = getByText(/Some Tet/i)
  expect(button).toHaveTextContent(/Some Text/i)
})
