import React from 'react'
import { View } from 'react-native'

import {
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { Text } from '../../Components/Text/Text'
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

  const propsOut: AwaitViewPropsOutType = {}

  return (
    <View style={[style.AwaitView, styleProps.AwaitView]} testID='AwaitView'>
      <Text>1234567890</Text>
    </View>
  )
}

export const AwaitView = React.memo(withParamsMediaYrl(AwaitViewComponent))
