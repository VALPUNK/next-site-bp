import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import * as React from "react"
import { Signup } from "./Signup/Signup"
import Authentication from "./Authentication"
;(storiesOf("Authentication", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Authenication", () => <Authentication />)
  .add("Sign up", () => <Signup />)
// .addWithJSX("Error", () => <Button error>1234567</Button>)
