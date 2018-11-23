import * as React from "react"
import styled from "styled-components"

interface Props {
  test?: string
}

export default class Jumobotron extends React.PureComponent<Props> {
  public render() {
    return (
      <StyledGradientJumboTron>{this.props.children}</StyledGradientJumboTron>
    )
  }
}

const StyledGradientJumboTron = styled.div`
  background-image: linear-gradient(#1de9b6, #039be5);
  background-repeat: no-repeat;
`
