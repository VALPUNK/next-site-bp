
import { Theme } from '@material-ui/core';
import * as React from 'react'
import Register from './Register'

interface Props {
  theme: Theme
}

interface State {
  value: number
}

export default class Index extends React.Component<Props, State> {
  constructor(props:any) {
    super(props)
    this.state = {
      value: 1
    }
  }


  public handleChangeIndex = (index: number) => {
    this.setState({ value: index })
  }

  public render(): React.ReactNode {
    return(
      <Register
        {...this.props}
      />
    )
  }
}