import { withWidth } from "@material-ui/core"
import { WithWidth } from "@material-ui/core/withWidth"
import * as React from "react"
import MobileTopBar from "./MobileNavbar"
import MonitorNavbar from "./MonitorNavbar"

class Navbar extends React.PureComponent<WithWidth> {
  public render() {
    if (this.props.width === "xs" || this.props.width === "sm") {
      return <MobileTopBar />
    }
    return <MonitorNavbar />
  }
}

export default withWidth()(Navbar)
