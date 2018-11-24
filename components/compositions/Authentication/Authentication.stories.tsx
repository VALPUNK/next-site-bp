import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import * as React from "react"
import { Signup } from "./Signup/Signup"
import Authentication from "./index"
import { select } from "@storybook/addon-knobs/react"
import Grid from "@material-ui/core/Grid"
;(storiesOf("Authentication", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Authenication", () => (
    <Grid container={true} justify="center" style={{ padding: 50 }}>
      <Grid item={true} lg={3} md={6} sm={8} xs={12} style={{ padding: 20 }}>
        <Authentication
          authState={select(
            "authState",
            ["default", "submitting", "error"],
            "default",
          )}
        />
      </Grid>
    </Grid>
  ))
  .add("Sign up", () => <Signup />)
// .addWithJSX("Error", () => <Button error>1234567</Button>)
