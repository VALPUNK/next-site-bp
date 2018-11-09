import * as React from "react"
import { Footer } from "~/components/collections"
import { Navbar } from "~/components/compositions"

export default class Layout extends React.Component {
  public render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
