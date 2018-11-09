import * as React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import styled from "styled-components"

interface Props {
  test?: string
}

interface State {
  test?: string
}

export default class Footer extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  public render() {
    return (
      <Grid
        container
        justify="center"
        style={{ backgroundColor: "#181818", height: 300, marginTop: 100 }}
      >
        <Grid
          container
          item
          xs={11}
          md={10}
          lg={8}
          style={{ color: "white", padding: "5% 0px" }}
        >
          <Grid container item xs={6} md={3} direction="column">
            <Typography variant="subtitle1" style={{ color: "white" }}>
              Users
            </Typography>
            <StyledFooterLink style={{ color: "white" }}>
              Download
            </StyledFooterLink>
            <StyledFooterLink style={{ color: "white" }}>FAQ</StyledFooterLink>
          </Grid>
          <Grid container item xs={6} md={3} direction="column">
            <Typography variant="subtitle1" style={{ color: "white" }}>
              Businesses
            </Typography>
            <StyledFooterLink style={{ color: "white" }}>
              Features
            </StyledFooterLink>
            <StyledFooterLink style={{ color: "white" }}>
              Pricing
            </StyledFooterLink>
            <StyledFooterLink style={{ color: "white" }}>
              Learning
            </StyledFooterLink>
          </Grid>
          <Grid container item xs={6} md={3} direction="column">
            <Typography variant="subtitle1" style={{ color: "white" }}>
              Support
            </Typography>
            <StyledFooterLink style={{ color: "white" }}>FAQ</StyledFooterLink>
            <StyledFooterLink style={{ color: "white" }}>
              Contact
            </StyledFooterLink>
          </Grid>
          <Grid container item xs={6} md={3} direction="column">
            <Typography variant="subtitle1" style={{ color: "white" }}>
              Account
            </Typography>
            <StyledFooterLink style={{ color: "white" }}>
              Sign Up
            </StyledFooterLink>
            <StyledFooterLink style={{ color: "white" }}>
              Login
            </StyledFooterLink>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const StyledFooterLink = styled(Typography)`
  && {
    color: white;
    opacity: 0.8;
  }
`
