import * as React from "react"
import { DashboardAdmin } from "~/components/compositions"

interface Props {
  test?: string
}

interface State {
  selectedId?: string
}

export default class Example extends React.PureComponent<Props, State> {
  public static Layout = DashboardAdmin

  public render() {
    return <div>Example in Admin</div>
  }
}
