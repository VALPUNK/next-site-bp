import { withWidth } from "@material-ui/core"
import { WithWidth } from "@material-ui/core/withWidth"
import * as React from "react"
import MobileTopBar from "./MobileNavbar"
import DesktopNavbar from "./DesktopNavbar"

/** Test component description */
export class Navbar extends React.PureComponent<WithWidth> {
  public render() {
    if (this.props.width === "xs" || this.props.width === "sm") {
      return <MobileTopBar />
    }
    return <DesktopNavbar />
  }
}

export default withWidth()(Navbar)
