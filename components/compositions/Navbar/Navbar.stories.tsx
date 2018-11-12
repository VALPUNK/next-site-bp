import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import * as React from "react"
import Navbar from "./index"
import MobileNavbar from "./MobileNavbar"
import DesktopNavbar from "./DesktopNavbar/index"
;(storiesOf("Navbar", module) as any)
  .add(
    "Responsive",
    withInfo({
      text: `This navbar is responsive and shows the Desktop when wide and Mobile when short`,
      inline: true,
    })(() => <Navbar />),
  )
  .add(
    "Desktop",
    withInfo({
      text: `This navbar is the Desktop width version`,
      inline: true,
    })(() => <DesktopNavbar />),
  )
  .add(
    "Mobile",
    withInfo({
      text: `This navbar is the Mobile width version`,
      inline: true,
    })(() => <MobileNavbar />),
  )
