import React from 'react'
import { View } from 'react-native'

import {
  withDeviceTypeYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { ChatCardsType } from './ChatCardsTypes'
import { styles } from './ChatCardsStyles'

/**
 * @import import { ChatCards     } from '../Components/ChatCards    /ChatCards    '
 */
const ChatCardsComponent: ChatCardsType = props => {
  const { styleProps = { ChatCards: {} }, mediaParams = mediaParamsDefault } =
    props
  const { deviceType, screenCase, width, height } = mediaParams
  const style = styles[deviceType]

  const propsOut: Record<string, any> = {}

  return (
    <View
      style={[style.ChatCards, styleProps.ChatCards]}
      testID='ChatCards    '
    >
      null
    </View>
  )
}

export const ChatCards = React.memo(withDeviceTypeYrl(ChatCardsComponent))
