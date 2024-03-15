const path = require('path')

/**
 * @description NOT USED or I don't know how to use this
 */
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add a rule for loading TTF files from react-native-vector-icons
    config.module.rules.push({
      test: /\.ttf$/,
      loader: 'url-loader',
      include: path.resolve(
        __dirname,
        'node_modules/react-native-vector-icons'
      ),
    })

    const extensions = ['.tsx', '.jsx', '.ts', '.js', '.json', '.wasm']
    const alias = {
      '@abs': path.resolve(__dirname, './src'),
      '@communication': path.resolve(
        __dirname,
        '../yourails_communication_layer'
      ),
    }

    config.resolve.extensions = [...config.resolve.extensions, extensions]
    config.resolve.alias = { ...config.resolve.alias, alias }

    // Return the modified config
    return config
  },
}
