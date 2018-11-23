import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import * as React from "react"
import { Signup } from "./Signup/Signup"
import Register from "."
;(storiesOf("Authentication", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Register", () => <Register />)
  .add("Sign up", () => <Signup />)
// .addWithJSX("Error", () => <Button error>1234567</Button>)
