import Grid from "@material-ui/core/Grid"
import React from "react"
import { Meta } from "~/components/basic"
import { Layout } from "~/components/templates"

export default class Index extends React.Component {
  public render() {
    return (
      <div>
        <Meta />
        <Layout>
          <Grid container justify="center" alignItems="center">
            Index Page
          </Grid>
        </Layout>
      </div>
    )
  }
}
