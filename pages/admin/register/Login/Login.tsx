import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'
import { TextInputVoid } from '~/lib/types/general';

interface LoginProps {
  login: () => {},
  setEmail: TextInputVoid,
  setPassword: TextInputVoid
}

export const Login = ({login, setEmail, setPassword}: LoginProps) => {
  return(
    <Grid container={true} alignItems='center' justify='center' style={{paddingBottom: 50}}>
      <Grid item={true} xs={11} md={8}>
        <TextField
          id="login_email"
          label="EMAIL"
          placeholder="Email"
          style={{
            width: '100%',
          }}
          margin="normal"
          onChange={setEmail}
        />
      </Grid>
      <Grid item={true} xs={11} md={8}>
        <TextField
          id="login_password"
          type="password"
          label="PASSWORD"
          placeholder="PASSWORD"
          style={{
            width: '100%',
          }}
          margin="normal"
          onChange={setPassword}
        />
      </Grid>
      <Grid item={true} xs={12} md={8} >
        <Typography style={{textAlign: 'right'}}>
          Forgot Password?
        </Typography>
      </Grid>
      <Grid item={true} xs={8} md={8}>
        <Button
          onClick={login}
          variant="contained"
          style={{
            width: '100%',
            marginTop: 30,
          }}
        >
          Login
        </Button>
      </Grid>
    </Grid>
  )
}

