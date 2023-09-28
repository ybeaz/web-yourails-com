import * as React from 'react'
import { View, Image } from 'react-native'
import { ImageYrlType } from './ImageYrlType'
import { ImageYrlStyle as style } from './ImageYrlStyle'

/**
 * @import import { ImageYrl, ImageYrlPropsType } from './YrlNativeViewLibrary'
 * @propsOut 
  imageYrlProps: {
    isActive: true,
    styleProps: { ImageYrl: {}, image: {} },
    testID: 'ImageYrl',
    uri: '',
    resizeMode: 'cover' // 'cover' | 'contain' | 'stretch' | 'repeat' | 'center',
     onLayout: () => {}
  }
 */
export const ImageYrl: ImageYrlType = props => {
  const {
    isActive = true,
    styleProps = { ImageYrl: {}, image: {} },
    testID = 'ImageYrl',
    uri,
    resizeMode = 'contain',
    onLayout = () => {},
  } = props

  if (!uri) null

  return isActive ? (
    <View style={[style.ImageYrl, styleProps.ImageYrl]} testID={testID}>
      <Image
        style={[style.image, styleProps.image]}
        source={{ uri }}
        resizeMode={resizeMode}
        onLayout={onLayout}
        testID={`${testID}_Image`}
      />
    </View>
  ) : null
}
