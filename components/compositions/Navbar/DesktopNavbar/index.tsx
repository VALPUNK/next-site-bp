import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuItem from "@material-ui/core/MenuItem"
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Link from "next/link"
import Router from "next/router"
import * as React from "react"
import { NavButtonProps } from "../index"

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
  icon: string
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

  public NagigateTo = (routeName: string) => (
    _event: React.MouseEvent<HTMLElement>,
  ) => {
    Router.push(routeName)
  }

  public render() {
    // const { classes } = this.props

    return (
      <div style={{ position: "sticky", top: 0, zIndex: 5 }}>
        <AppBar position="sticky" className={this.props.classes.root}>
          <Toolbar variant="regular" className={this.props.classes.toolbar}>
            <IconButton color="inherit" aria-label="Menu">
              <img
                src={this.props.icon}
                style={{ width: 100, height: "auto" }}
                onClick={this.NagigateTo("/")}
              />
            </IconButton>
            <div style={{ flexGrow: 1 }} />

            {this.props.children}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(MonitorNavbar)
