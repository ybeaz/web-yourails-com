const path = require('path')
const { getDefaultConfig } = require('metro-config')

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig()

  const extraNodeModules = {
    common: path.resolve(__dirname, '../yourails_communication_layer'),
  }

  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
      extraNodeModules,
      unstable_conditionNames: ['browser', 'require', 'react-native'],
    },
  }
})()
