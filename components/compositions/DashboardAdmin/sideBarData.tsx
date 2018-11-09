import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import BugIcon from "@material-ui/icons/BugReport"
import EditIcon from "@material-ui/icons/Edit"
import LevelsIcon from "@material-ui/icons/FormatListNumbered"
import HelpIcon from "@material-ui/icons/Help"
import HomeIcon from "@material-ui/icons/Home"
import RewardsEditorIcon from "@material-ui/icons/StarHalf"
import OfficeIcon from "@material-ui/icons/Store"
import Link from "next/link"
import * as React from "react"

export const mailFolderListItems = (
  <div>
    <Link href="/admin">
      <ListItem button={true}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
    <Link href="/admin/example">
      <ListItem button={true}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Admin Example" />
      </ListItem>
    </Link>
  </div>
)

export const otherMailFolderListItems = (
  <div>
    <Link href="/admin/example">
      <ListItem button={true}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Admin Example" />
      </ListItem>
    </Link>
  </div>
)

export const bottomSideBarIcons = (
  <div>
    <ListItem button={true}>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItem>
    <ListItem button={true}>
      <ListItemIcon>
        <BugIcon />
      </ListItemIcon>
      <ListItemText primary="Report Bug" />
    </ListItem>
  </div>
)
