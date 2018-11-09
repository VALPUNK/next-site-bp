import { withInfo } from "@storybook/addon-info"
import { color } from "@storybook/addon-knobs/react"
import { storiesOf } from "@storybook/react"
import * as React from "react"
import Button from "."
;(storiesOf("Button", module) as any)
  .addDecorator(withInfo(`Description!`))
  .addWithJSX("Vanilla", () => (
    <Button bgColor={color("Background Color", "green")}>1234567</Button>
  ))
  .addWithJSX("Error", () => <Button error>1234567</Button>)
