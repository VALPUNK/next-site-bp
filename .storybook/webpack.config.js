const path = require("path")
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin")
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader"),
  })
  config.plugins.push(new TSDocgenPlugin()) // optional
  config.resolve.extensions.push(".ts", ".tsx")
  // config.resolve.alias["components"] = path.resolve(
  //   __dirname,
  //   "../components/basic",
  // )

  config.resolve = {
    ...baseConfig.resolve,
    alias: {
      // ...baseConfig.resolve.alias,
      "~/lib/utils/localstorage": path.resolve(
        __dirname,
        "../lib/utils/localstorage",
      ),
      "~/lib/theme/colors": path.resolve(__dirname, "../lib/theme/colors"),
      "~/components/basic": path.resolve(__dirname, "../components/basic"),
      "~/components/collections": path.resolve(
        __dirname,
        "../components/collections",
      ),

      "~/components/compositions": path.resolve(
        __dirname,
        "../components/compositions",
      ),
      "~/components/special": path.resolve(__dirname, "../components/special"),
      "~/components/templates": path.resolve(
        __dirname,
        "../components/templates",
      ),
    },
  }
  // config.resolve.alias["~/lib/utils/localstorage"] = path.resolve(
  //   __dirname,
  //   "../lib/utils/localstorage",
  // )
  // config.resolve.modules = [
  //   ...(config.resolve.modules || []),
  //   path.resolve('./'),
  // ];
  return config
}
