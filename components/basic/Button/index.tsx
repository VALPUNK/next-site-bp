import * as React from "react"
import styled from "styled-components"

export interface Props {
  /** What you sandwhich in the tags */
  children: React.ReactNode
  /**
   * To flag for error styling
   * @default false
   */
  error?: boolean
  /** onClick handler */
  onClick?: () => void

  /** Background color styling for the button */
  bgColor?: string
}

const Button = (props: Props) => {
  return (
    <Main {...props} onClick={() => props.onClick}>
      {props.children}
    </Main>
  )
}

const Main = styled.span<Props>`
  background-color: ${props => (props.error ? "red" : props.bgColor)};
  color: white;
  border-radius: 8px;
  padding: 5px 20px;
  cursor: pointer;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
`

export default Button
