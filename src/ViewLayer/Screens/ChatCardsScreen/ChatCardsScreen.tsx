import React from 'react'
import { View } from 'react-native'

import {
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { Text } from '../../Components/Text/Text'
import { themes } from '../../Styles/themes'
import {
  ChatCardsScreenPropsType,
  ChatCardsScreenPropsOutType,
  ChatCardsScreenComponentType,
  ChatCardsScreenType,
} from './ChatCardsScreenTypes'
import { styles } from './ChatCardsScreenStyles'

/**
 * @description Component to render
 * @import import { ChatCardsScreen, ChatCardsScreenPropsType, ChatCardsScreenPropsOutType, ChatCardsScreenType } 
             from '../Components/ChatCardsScreen/ChatCardsScreen'
 */
const ChatCardsScreenComponent: ChatCardsScreenComponentType = props => {
  const {
    styleProps = { ChatCardsScreen: {} },
    mediaParams = mediaParamsDefault,
  } = props
  const { deviceType, screenCase, width, height } = mediaParams
  const style = styles[deviceType]

  const propsOut: ChatCardsScreenPropsOutType = {}

  return (
    <View
      style={[style.ChatCardsScreen, styleProps.ChatCardsScreen]}
      testID='ChatCardsScreen'
    >
      <Text style={[style.text, styleProps.text]} testID='text'>
        ChatCardsScreen
      </Text>
    </View>
  )
}

export const ChatCardsScreen: ChatCardsScreenType = withParamsMediaYrl(
  React.memo(ChatCardsScreenComponent)
)

export type {
  ChatCardsScreenPropsType,
  ChatCardsScreenPropsOutType,
  ChatCardsScreenComponentType,
  ChatCardsScreenType,
}
