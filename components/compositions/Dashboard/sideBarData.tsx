import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ReferralsIcon from "@material-ui/icons/ContactPhone"
import HomeIcon from "@material-ui/icons/Home"
import ClientsIcon from "@material-ui/icons/People"
import Link from "next/link"
import * as React from "react"

export const mailFolderListItems = (
  <div>
    <Link href="/dashboard">
      <ListItem button={true}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
    <Link href="/dashboard/example">
      <ListItem button={true}>
        <ListItemIcon>
          <ClientsIcon />
        </ListItemIcon>
        <ListItemText primary="Example" />
      </ListItem>
    </Link>

  </div>
)
