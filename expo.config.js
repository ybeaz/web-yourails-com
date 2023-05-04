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

    console.info('expo.config [15]', { config })

    // Return the modified config
    return config
  },
}
