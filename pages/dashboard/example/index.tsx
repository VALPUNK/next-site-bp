import Grid from "@material-ui/core/Grid"
import * as React from "react"
import { Dashboard } from "~/components/compositions"

interface Props {
  test?: string
}

interface State {
  test?: string
}

export default class Billing extends React.PureComponent<Props, State> {
  public static Layout = Dashboard

  public render() {
    return (
      <div>
        <Grid container>Example</Grid>
      </div>
    )
  }
}
