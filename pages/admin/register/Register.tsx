import { Theme, withStyles } from "@material-ui/core/styles"
import { TabsClassKey } from "@material-ui/core/Tabs"
import { Classes } from "jss"
import * as React from "react"
import { Layout } from "~/components/templates"

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  indicator: {
    backgroundColor: "white",
    height: 5,
  },
})

interface Props {
  classes?: Classes<TabsClassKey>
  theme?: Theme
}

const Register: React.SFC<Props> = () => {
  return <Layout>Register here</Layout>
}

export default withStyles(styles, { withTheme: true })(Register)
