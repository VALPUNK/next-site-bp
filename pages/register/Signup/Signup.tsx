import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import * as React from "react"
import { saveToken } from "~/lib/utils/localstorage"

interface Props {
  signup: () => void
  setEmail: (text: string) => void
  setPassword: (text: string) => void
  setName: (text: string) => void
}

export const Signup = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")

  const updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value)
        break

      case "email":
        setEmail(e.target.value)
        break

      case "password":
        setPassword(e.target.value)
        break

      case "confirmPassword":
        setConfirmPassword(e.target.value)
        break
      default:
        break
    }
  }
  const signup = () => {
    console.log(`${name} ${email} ${password} ${confirmPassword}`)
    // await this.props.client.resetStore()
    saveToken("123")

    // this.props.router.push("/dashboard")
  }

  return (
    <Grid
      container={true}
      alignItems="center"
      justify="center"
      style={{ paddingBottom: 50 }}
    >
      <Grid item={true} xs={11} md={8}>
        <TextField
          id="name"
          label="NAME"
          placeholder="Name"
          style={{
            width: "100%",
          }}
          margin="normal"
          onChange={updateState}
        />
      </Grid>
      <Grid item={true} xs={11} md={8}>
        <TextField
          id="email"
          label="EMAIL"
          placeholder="Email"
          style={{
            width: "100%",
          }}
          margin="normal"
          onChange={updateState}
        />
      </Grid>
      <Grid item={true} xs={11} md={8}>
        <TextField
          id="password"
          type="password"
          label="PASSWORD"
          placeholder="PASSWORD"
          style={{
            width: "100%",
          }}
          margin="normal"
          onChange={updateState}
        />
      </Grid>{" "}
      <Grid item={true} xs={11} md={8}>
        <TextField
          id="confirmPassword"
          type="password"
          label="PASSWORD"
          placeholder="PASSWORD"
          style={{
            width: "100%",
          }}
          margin="normal"
          onChange={updateState}
        />
      </Grid>
      <Grid item={true} xs={8} md={8}>
        <Button
          onClick={signup}
          variant="contained"
          style={{
            width: "100%",
            marginTop: 30,
          }}
        >
          Sign Up
        </Button>
      </Grid>
    </Grid>
  )
}
