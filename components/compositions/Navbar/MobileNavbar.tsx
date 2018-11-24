import AppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import Toolbar from "@material-ui/core/Toolbar"
import MenuIcon from "@material-ui/icons/Menu"
import Router from "next/router"
import * as React from "react"

interface Props {
  history?: History
  icon?: string
  children?: React.ReactNode
}

const MobileNavbar = ({ icon, children }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const [auth, setAuth] = React.useState(true)
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(undefined)
  }

  const NavigateTo = (routeName: string) => (
    _event: React.MouseEvent<HTMLElement>,
  ) => {
    Router.push(routeName)
  }

  return (
    <div>
      <AppBar
        position="static"
        style={{ backgroundColor: "white", fontFamily: "Roboto" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={NavigateTo("/")}
          >
            <img src={icon} style={{ width: 80, height: "auto" }} />
          </IconButton>
          <div style={{ flexGrow: 1 }} />
          <div>
            <IconButton
              color="inherit"
              onClick={handleMenu}
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
              onClose={handleClose}
            >
              {children}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default MobileNavbar
