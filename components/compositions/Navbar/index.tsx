import { withWidth } from "@material-ui/core"
import MenuItem from "@material-ui/core/MenuItem"
import { WithWidth } from "@material-ui/core/withWidth"
import * as React from "react"
import DesktopNavbar from "./DesktopNavbar"
import MobileTopBar from "./MobileNavbar"
import Router from "next/router"

export interface NavButtonProps {
  text?: string
  link?: string
}

const navButtons: NavButtonProps[] = [
  {
    text: "How",
    link: "/how",
  },
  {
    text: "Try Free",
    link: "/tryfree",
  },
]

export interface NavbarProps extends WithWidth {}

const Navbar = ({ width }: NavbarProps) => {
  const NavComponent =
    width === "xs" || width === "sm" ? MobileTopBar : DesktopNavbar

  const NagigateTo = (routeName: string) => (
    _event: React.MouseEvent<HTMLElement>,
  ) => {
    Router.push(routeName)
  }

  return (
    <NavComponent icon="https://s3.us-east-2.amazonaws.com/valpunk-cdn/happily/happily_logo.png">
      {navButtons.map(item => (
        <MenuItem key={item.text} onClick={NagigateTo(item.link)}>
          {item.text}
        </MenuItem>
      ))}
    </NavComponent>
  )
}

export default withWidth()(Navbar)
