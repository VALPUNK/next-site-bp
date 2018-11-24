import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { Theme } from "@material-ui/core/styles"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import Typography from "@material-ui/core/Typography"
import { withRouter, WithRouterProps } from "next/router"
import * as React from "react"
import SwipeableViews from "react-swipeable-views"
import { Login } from "./Login/Login"
import { Signup } from "./Signup/Signup"
import CircularProgress from "@material-ui/core/CircularProgress"

interface Props extends WithRouterProps {
  theme?: Theme
  authState?: authStateType
}

type authStateType = "default" | "error" | "submitting"

const Authenication = ({ router, authState = "default" }: Props) => {
  const [value, setValue] = React.useState(0)
  // const [authState, setAuthState] = React.useState<authStateType>("submitting")

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
    <Paper classes={{}}>
      <Grid
        container={true}
        alignItems="center"
        justify="center"
        style={{ height: 200, backgroundColor: "#007FBA" }}
      >
        {authState === "default" && (
          <img
            src={
              "https://s3.us-east-2.amazonaws.com/saf-cdn/img/plane_logo.png"
            }
            alt="Send a friend logo"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        )}
        {authState === "submitting" && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress
              style={{ color: "white" }}
              size={40}
              thickness={4.0}
            />
          </div>
        )}
        {authState === "error" && (
          <Typography
            style={{ color: "red", backgroundColor: "white", padding: 8 }}
            variant="subtitle2"
          >
            There was an error.
          </Typography>
        )}
      </Grid>
      <Grid container={true}>
        <Grid item={true} xs={12}>
          <Tabs
            value={value}
            onChange={handleChange}
            fullWidth={true}
            style={{ backgroundColor: "#007FBA", height: 5 }}
          >
            <Tab label="Log In" style={{ color: "white" }} />
            <Tab label="Sign Up" style={{ color: "white" }} />
          </Tabs>
        </Grid>
      </Grid>
      <SwipeableViews
        axis="x"
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{}}
      >
        <Login />
        <Signup />
      </SwipeableViews>
    </Paper>
  )
}

export default withRouter(Authenication)
