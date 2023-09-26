import React from 'react'
import { View } from 'react-native'

import {
  ImageYrl,
  ImageYrlPropsType,
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { AwaitViewType, AwaitViewPropsOutType } from './AwaitViewTypes'
import { styles } from './AwaitViewStyles'

/**
 * @import import { AwaitView } from '../Components/AwaitView/AwaitView'
 */
const AwaitViewComponent: AwaitViewType = props => {
  const { styleProps = { AwaitView: {} }, mediaParams = mediaParamsDefault } =
    props
  const { deviceType, screenCase, width, height } = mediaParams
  const style = styles[deviceType]

  const propsOut: AwaitViewPropsOutType = {
    imageYrlProps: {
      styleProps: {
        ImageYrl: {},
        image: {
          height: '10rem'.getPx(),
          width: '10rem'.getPx(),
        },
      },
      testID: 'ImageYrl',
      uri: 'https://yourails.com/images/loading/loading09.gif',
      resizeMode: 'cover', // 'cover' | 'contain' | 'stretch' | 'repeat' | 'center'
    },
  }

  return (
    <View style={[style.AwaitView, styleProps.AwaitView]} testID='AwaitView'>
      <ImageYrl {...propsOut.imageYrlProps} />
    </View>
  )
}

export const AwaitView = withParamsMediaYrl(React.memo(AwaitViewComponent))
