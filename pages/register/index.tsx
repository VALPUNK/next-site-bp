import { Theme } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import { withRouter, WithRouterProps } from "next/router"
import * as React from "react"
import { Authentication } from "~/components/compositions"
import { Jumbotron, Layout } from "~/components/templates"

interface Props extends WithRouterProps {
  theme: Theme
}

interface State {
  value: number
}

class Index extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      value: 0,
    }
    this.handleChange.bind(this)
    this.handleChangeIndex.bind(this)
  }

  public componentDidMount() {
    if (
      this.props.router &&
      this.props.router.query &&
      this.props.router.query.mode
    ) {
      if (this.props.router.query.mode.toString().toLowerCase() === "login") {
        this.setState({
          value: 0,
        })
      } else if (
        this.props.router.query.mode.toString().toLowerCase() === "signup"
      ) {
        this.setState({
          value: 1,
        })
      }
    }
  }

  public handleChange = (_event: React.FormEvent, value: number) => {
    this.setState({
      value,
    })
  }

  public handleChangeIndex = (index: number) => {
    this.setState({ value: index })
  }

  public render(): React.ReactNode {
    return (
      <Layout>
        <Jumbotron>
          <Grid container={true} spacing={24}>
            <Grid item={true} xs={12}>
              <Grid container={true} justify="center" spacing={16}>
                <Authentication />
              </Grid>
            </Grid>
          </Grid>
        </Jumbotron>
      </Layout>
    )
  }
}

export default withRouter(Index)
