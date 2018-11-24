import Grid from "@material-ui/core/Grid"
import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import * as React from "react"
import SimpleTable from "./index"
;(storiesOf("Table", module) as any)
  .addDecorator(withInfo({ text: `Description!`, inline: true }))
  .add("Table Select", () => (
    <Grid container={true} justify="center" style={{ padding: 50 }}>
      <Grid item={true} xs={10} style={{ padding: 20 }}>
        <SimpleTable />
      </Grid>
    </Grid>
  ))
// .addWithJSX("Error", () => <Button error>1234567</Button>)
