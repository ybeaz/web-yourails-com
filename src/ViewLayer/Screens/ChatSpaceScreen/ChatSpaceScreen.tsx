import React from 'react'
import { View } from 'react-native'

import {
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { Text } from '../../Components/Text/Text'
import { themes } from '../../Styles/themes'
import {
  ChatSpaceScreenPropsType,
  ChatSpaceScreenPropsOutType,
  ChatSpaceScreenComponentType,
  ChatSpaceScreenType,
} from './ChatSpaceScreenTypes'
import { styles } from './ChatSpaceScreenStyles'

/**
 * @description Component to render
 * @import import { ChatSpaceScreen, ChatSpaceScreenPropsType, ChatSpaceScreenPropsOutType, ChatSpaceScreenType } 
             from '../Components/ChatSpaceScreen/ChatSpaceScreen'
 */
const ChatSpaceScreenComponent: ChatSpaceScreenComponentType = props => {
  const {
    styleProps = { ChatSpaceScreen: {} },
    mediaParams = mediaParamsDefault,
  } = props
  const { deviceType, screenCase, width, height } = mediaParams
  const style = styles[deviceType]

  const propsOut: ChatSpaceScreenPropsOutType = {}

  return (
    <View
      style={[style.ChatSpaceScreen, styleProps.ChatSpaceScreen]}
      testID='ChatSpaceScreen'
    >
      <Text style={[style.text, styleProps.text]} testID='text'>
        ChatSpaceScreen
      </Text>
    </View>
  )
}

export const ChatSpaceScreen: ChatSpaceScreenType = withParamsMediaYrl(
  React.memo(ChatSpaceScreenComponent)
)

export type {
  ChatSpaceScreenPropsType,
  ChatSpaceScreenPropsOutType,
  ChatSpaceScreenComponentType,
  ChatSpaceScreenType,
}
