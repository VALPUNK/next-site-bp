import AppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import MenuIcon from "@material-ui/icons/Menu"
import Router from "next/router"
import * as React from "react"
import { NavButtonProps } from "./index"

const styles = () =>
  createStyles({
    root: { backgroundColor: "white", fontFamily: "Roboto" },
  })
interface Props extends WithStyles<typeof styles> {
  history?: History
  icon: string
}

interface State {
  auth: boolean
  anchorEl: EventTarget & HTMLElement | null | undefined
}

class MobileNavbar extends React.Component<Props, State> {
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
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div>
        <AppBar position="static" className={this.props.classes.root}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={
                this.NagigateTo("/") // className={classes.menuButton}
              }
            >
              <img
                src={this.props.icon}
                style={{ width: 80, height: "auto" }}
              />
            </IconButton>
            <div style={{ flexGrow: 1 }} />
            <div>
              <IconButton
                color="inherit"
                onClick={
                  this.handleMenu // className={classes.menuButton}
                }
                aria-label="Menu"
                style={{ color: "black" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                onClose={this.handleClose}
              >
                {this.props.children}
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(MobileNavbar)
