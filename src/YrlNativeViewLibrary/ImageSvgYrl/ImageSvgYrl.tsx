import * as React from 'react'
import { View, Image } from 'react-native'
import { SvgUri, SvgFromUri, SvgCssUri } from 'react-native-svg'
import { ImageSvgYrlType } from './ImageSvgYrlType'
import { ImageSvgYrlStyle as style } from './ImageSvgYrlStyle'

/**
 * @import import { ImageSvgYrl, ImageSvgYrlPropsType } from './YrlNativeViewLibrary'
 * @propsOut 
  ImageSvgYrlProps: {
    isActive: true,
    styleProps: { ImageSvgYrl: {}, image: {} },
    testID: 'ImageSvgYrl',
    uri: '',
    onLayout: () => {}
  }
 */
export const ImageSvgYrl: ImageSvgYrlType = props => {
  const {
    isActive = true,
    styleProps = { ImageYrl: {}, image: { width: 24, height: 24 } },
    testID = 'ImageSvgYrl',
    uri,
    onLayout = () => {},
  } = props

  if (!uri) null

  return isActive ? (
    <View style={[style.ImageSvgYrl, styleProps.ImageYrl]} testID={testID}>
      <SvgCssUri
        style={[style.image, styleProps.image]}
        width={styleProps?.image?.width}
        height={styleProps?.image?.height}
        uri={uri || null}
        onLayout={onLayout}
        testID={`${testID}_ImageSvgYrl`}
      />
    </View>
  ) : null
}
