import Grid from "@material-ui/core/Grid"
import React from "react"
import { Meta } from "~/components/basic"
import { Layout } from "~/components/templates"
import { RegularButton } from "valpunk-ui"
import styled from "styled-components"
import { css } from "emotion"
import { Button } from "@material-ui/core"

interface Props {
  className?: string
}

export default class Index extends React.Component<Props> {
  public render() {
    return (
      <div>
        <Meta />
        <Layout>
          <Grid container justify="center" alignItems="center">
            Index Page
            <RegularButton>123</RegularButton>
            <ModifiedRegular>23</ModifiedRegular>
            <button
              className={css`
                color: white;
                background-color: tomato;
              `}
            >
              emotion
            </button>
            <OtherButton>555555</OtherButton>
            <MaterialButton>Material</MaterialButton>
          </Grid>
        </Layout>
      </div>
    )
  }
}

const ModifiedRegular = styled(RegularButton)`
  && {
    background-color: green;
  }
`

const OtherButton = styled.button`
  background-color: purple;
  color: white;
`

const MaterialButton = styled(Button)`
  && {
    background-color: orange;
  }
`
