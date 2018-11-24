import { configure, setAddon, addDecorator } from "@storybook/react"
import JSXAddon from "storybook-addon-jsx"
import { withKnobs } from "@storybook/addon-knobs/react"
import { withInfo } from "@storybook/addon-info"
addDecorator(withKnobs)
addDecorator(withInfo)
setAddon(JSXAddon)

const req = require.context("../components", true, /\.stories\.tsx$/)
const pages = require.context("../pages", true, /\.stories\.tsx$/)

function loadStories() {
  require("./welcomeStory")
  req.keys().forEach(file => req(file))
  pages.keys().forEach(file => pages(file))
}

configure(loadStories, module)
