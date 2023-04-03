import * as React from 'react'
import { View, Image } from 'react-native'
import { ImageYrlType } from './ImageYrlType'
import { ImageYrlStyle as style } from './ImageYrlStyle'

/**
 * @import import { ImageYrl } from './YrlNativeViewLibrary/ImageYrl/ImageYrl'
 * @import import { ImageYrlPropsType } from './YrlNativeViewLibrary/ImageYrl/ImageYrlType'
 * @propsOut 
  imageYrlProps: {
    styleProps: { ImageYrl: {}, image: {} },
    testID: 'ImageYrl',
    uri: '',
    resizeMode: 'cover' // 'cover' | 'contain' | 'stretch' | 'repeat' | 'center'
  }
 */
export const ImageYrl: ImageYrlType = props => {
  const {
    styleProps = { ImageYrl: {}, image: {} },
    testID = 'ImageYrl',
    uri,
    resizeMode = 'contain',
    onLayout = () => {},
  } = props

  return (
    <View style={[style.ImageYrl, styleProps.ImageYrl]} testID={testID}>
      <Image
        style={[style.image, styleProps.image]}
        source={{ uri }}
        resizeMode={resizeMode}
        onLayout={onLayout}
        testID={`${testID}_Image`}
      />
    </View>
  )
}
