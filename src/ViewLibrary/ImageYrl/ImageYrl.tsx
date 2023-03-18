import * as React from 'react'
import { View, Image } from 'react-native'
import { ImageYrlType } from './ImageYrlType'
import { ImageYrlStyle } from './ImageYrlStyle'

/**
 * @import import { ImageYrl } from './ViewLibrary/ImageYrl/ImageYrl'
 * @import import { ImageYrlPropsType } from './ViewLibrary/ImageYrl/ImageYrlType'
 */
export const ImageYrl: ImageYrlType = props => {
  const { styleProps = { ImageYrl: {}, image: {} }, uri } = props

  return (
    <View style={[ImageYrlStyle.ImageYrl, styleProps.ImageYrl]}>
      <Image style={[ImageYrlStyle.image, styleProps.image]} source={{ uri }} />
    </View>
  )
}
