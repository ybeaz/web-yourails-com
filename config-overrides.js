const path = require('path')

/**
 * @description USED but I doen't see that it works
        it supported by react-app-rewired package
        it required to change scripts: start, build, test
        See metro.config.js and expo.config.js
 */
export default function override(config, env) {
  // const extensions = ['.tsx', '.jsx', '.ts', '.js', '.json', '.wasm']
  // const alias = {
  //   '@abs': path.resolve(__dirname, './src'),
  //   '@communication': path.resolve(
  //     __dirname,
  //     '../yourails_communication_layer'
  //   ),
  // }

  // config.resolve.extensions = [...config.resolve.extensions, extensions]
  // config.resolve.alias = { ...config.resolve.alias, alias }

  return config
}
