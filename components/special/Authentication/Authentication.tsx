import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { Theme, withStyles } from "@material-ui/core/styles"
import Tab from "@material-ui/core/Tab"
import Tabs, { TabsClassKey } from "@material-ui/core/Tabs"
import { Classes } from "jss"
import * as React from "react"
import SwipeableViews, { OnChangeIndexCallback } from "react-swipeable-views"
import { Login } from "./Login/Login"
import { Signup } from "./Signup/Signup"
import { withRouter, WithRouterProps } from "next/router"
// import { cdn } from "~/lib/constants/constants"

// cthis

interface Props extends WithRouterProps {
  theme?: Theme
}

const Authenication = ({ router }: Props) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (_event: React.FormEvent, v: number) => {
    setValue(v)
  }

  const handleChangeIndex = (index: number) => {
    setValue(index)
  }

  React.useEffect(() => {
    if (router && router.query && router.query.mode) {
      if (router.query.mode.toString().toLowerCase() === "login") {
        setValue(0)
      } else if (router.query.mode.toString().toLowerCase() === "signup") {
        setValue(1)
      }
    }
  })

  return (
    <Grid container={true} justify="center" style={{ padding: 50 }}>
      <Grid item={true} lg={3} md={6} sm={8} xs={12} style={{ padding: 20 }}>
        <Paper classes={{}}>
          <Grid container={true}>
            <Grid
              container={true}
              alignItems="center"
              justify="center"
              style={{ height: 200, backgroundColor: "#007FBA" }}
            >
              <img
                src={
                  "https://s3.us-east-2.amazonaws.com/saf-cdn/img/plane_logo.png"
                }
                alt="Send a friend logo"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </Grid>
            <Grid container={true}>
              <Grid item={true} xs={12}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  fullWidth={true}
                  // classes={{
                  //   indicator: classes.indicator,
                  // }}
                  style={{ backgroundColor: "#007FBA", height: 5 }}
                >
                  <Tab label="Log In" style={{ color: "white" }} />
                  <Tab label="Sign Up" style={{ color: "white" }} />
                </Tabs>
              </Grid>
            </Grid>
            <SwipeableViews
              // axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              axis="x"
              index={value}
              onChangeIndex={handleChangeIndex}
              style={{}}
            >
              <Login />
              <Signup />
            </SwipeableViews>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default withRouter(Authenication)
