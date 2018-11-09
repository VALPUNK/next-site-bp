import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import { Dashboard } from '~/components/compositions';

interface Props {
  test?: string
}

interface State {
 test?: string
}

export default class Index extends React.PureComponent<Props, State> {
  public static Layout = Dashboard

  constructor(props:any) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <Grid container>
        <Grid item xs={4}>
          Index of dashboard
        </Grid>
      </Grid>
    )
  }
}
