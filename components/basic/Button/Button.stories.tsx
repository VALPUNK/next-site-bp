import { withInfo } from "@storybook/addon-info"
import { color, text } from "@storybook/addon-knobs/react"
import { storiesOf } from "@storybook/react"
import * as React from "react"
import Button from "."
;(storiesOf("Button", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Vanilla", () => (
    <Button bgColor={color("Background Color", "green")}>
      {text("Text for the button", "123")}
    </Button>
  ))
  .add("Error", () => (
    <Button error onClick={() => console.log("hi")}>
      1234567
    </Button>
  ))
// .addWithJSX("Error", () => <Button error>1234567</Button>)
