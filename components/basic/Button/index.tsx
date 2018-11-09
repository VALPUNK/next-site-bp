import * as React from "react"

export interface Props {
  /** What you sandwhich in the tags */
  children: React.ReactNode
  /**
   *
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
    <button style={{ backgroundColor: props.error ? "red" : props.bgColor }}>
      {props.children}
    </button>
  )
}

export default Button
