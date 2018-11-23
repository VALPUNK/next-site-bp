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
// import { cdn } from "~/lib/constants/constants"

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  indicator: {
    backgroundColor: "white",
    height: 5,
  },
})

interface Props {
  classes: Classes<TabsClassKey>
  value: number
  handleChange: (event: React.ChangeEvent, value: any) => void
  handleChangeIndex: OnChangeIndexCallback
  theme: Theme
}

const Register: React.SFC<Props> = ({
  classes,
  value,
  handleChange,
  handleChangeIndex,
  theme,
}) => {
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
                  classes={{
                    indicator: classes.indicator,
                  }}
                  style={{ backgroundColor: "#007FBA" }}
                >
                  <Tab label="Log In" style={{ color: "white" }} />
                  <Tab label="Sign Up" style={{ color: "white" }} />
                </Tabs>
              </Grid>
            </Grid>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
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

export default withStyles(styles, { withTheme: true })(Register)
