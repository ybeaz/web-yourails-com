import * as React from 'react'
import { View, Image } from 'react-native'
import { ImageYrlType } from './ImageYrlType'
import { ImageYrlStyle as style } from './ImageYrlStyle'

/**
 * @import import { ImageYrl } from './ViewLibrary/ImageYrl/ImageYrl'
 * @import import { ImageYrlPropsType } from './ViewLibrary/ImageYrl/ImageYrlType'
 * @propsOut 
  imageYrlProps: {
    styleProps: { ImageYrl: {}, image: {} },
    testID: 'ImageYrl',
    uri: '',
  }
 */
export const ImageYrl: ImageYrlType = props => {
  const {
    styleProps = { ImageYrl: {}, image: {} },
    testID = 'ImageYrl',
    uri,
  } = props

  return (
    <View style={[style.ImageYrl, styleProps.ImageYrl]} testID={testID}>
      <Image
        style={[style.image, styleProps.image]}
        testID={`${testID}_Image`}
        source={{ uri }}
      />
    </View>
  )
}
