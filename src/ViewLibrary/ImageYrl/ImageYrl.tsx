import * as React from 'react'
import { View, Image } from 'react-native'
import { ImageYrlType } from './ImageYrlType'
import { imageYrlStyleDefault } from './ImageYrlStyle'

export const ImageYrl: ImageYrlType = props => {
  const { styleProps, uri } = props

  const styleContainer =
    (styleProps && styleProps.container) || imageYrlStyleDefault.container

  const styleImage =
    (styleProps && styleProps.image) || imageYrlStyleDefault.image

  return (
    <View style={styleContainer}>
      <Image style={styleImage} source={{ uri }} />
    </View>
  )
}
