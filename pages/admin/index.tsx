import * as React from "react"
import { DashboardAdmin } from "~/components/compositions"

interface Props {
  test?: string
}

interface State {
  test?: string
}

export default class Index extends React.PureComponent<Props, State> {
  public static Layout = DashboardAdmin

  constructor(props: any) {
    super(props)
    this.state = {}
  }

  public render() {
    return <div>index page of admin</div>
  }
}
