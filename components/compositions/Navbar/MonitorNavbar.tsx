import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles"
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme"
import Toolbar from "@material-ui/core/Toolbar"
import Link from "next/link"
import Router from "next/router"
import * as React from "react"
import IconButton from "@material-ui/core/IconButton"

const styles = () =>
  createStyles({
    root: {
      backgroundColor: "white",
      fontFamily: "Roboto",
    },
    toolbar: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
  })

interface Props extends WithStyles<typeof styles> {
  history?: History
  title: string
}

interface State {
  auth: boolean
  anchorEl: EventTarget & HTMLElement
}

class MonitorNavbar extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      auth: true,
      anchorEl: null,
    }
  }

  public handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  public handleClose = () => {
    this.setState({ anchorEl: undefined })
  }

  public render() {
    // const { classes } = this.props

    return (
      <div style={{ position: "sticky", top: 0, zIndex: 5 }}>
        <AppBar position="sticky" className={this.props.classes.root}>
          <Toolbar variant="regular" className={this.props.classes.toolbar}>
            <IconButton color="inherit" aria-label="Menu">
              <img
                src="https://s3.us-east-2.amazonaws.com/valpunk-cdn/happily/happily_logo.png"
                style={{ width: 100, height: "auto" }}
                onClick={() => Router.push("/")}
              />
            </IconButton>
            <div style={{ flexGrow: 1 }} />
            <Link href="/#">
              <Button style={{ color: "dodgerblue" }}>Item 1</Button>
            </Link>
            <Link href="/#">
              <Button style={{ color: "dodgerblue" }}>Item 2</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(MonitorNavbar)
