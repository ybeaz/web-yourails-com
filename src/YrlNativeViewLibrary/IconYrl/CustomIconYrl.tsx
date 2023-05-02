import React from 'react'
// import { CustomIconYrlType } from './CustomIconYrlType'
// import { CustomIconYrlStyle as style } from './CustomIconYrlStyle'

import { createIconSet } from '@expo/vector-icons'
import IoniconsGlyphMap from '@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Ionicons.json'

const IoniconsFont = require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf')

/**
 * @usage <CustomIconYrl name='ios-heart' size={32} color='red' />
 * @import import { CustomIconYrlYrl, CustomIconYrlPropsType } from './YrlNativeViewLibrary'
 * @propsOut
  CustomIconYrlProps: {
  }
 */
export const CustomIconYrl = createIconSet(
  IoniconsGlyphMap,
  'Ionicons',
  IoniconsFont
)
