import React from 'react'
import { View } from 'react-native'

import { InputTextYrl, withPropsYrl } from '../../../YrlNativeViewLibrary'
import { IconYrl } from '../../../YrlNativeViewLibrary'
import { ChatInputType } from './ChatInputType'
import { style } from './ChatInputStyle'
import { themes } from '../../Styles/themes'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'

const ChatInputComponent: ChatInputType = props => {
  const { handleEvents, idProfileActive, inputChat } = props

  const propsOut: Record<string, any> = {
    inputTextYrlProps: {
      onChangeText: (text: string) =>
        handleEvents.ON_CHANGE_INPUT_CHAT({}, { idProfileActive, text }),
      styleProps: {
        InputTextYrl: style.InputTextYrl,
        inputText: {
          ...style.inputText,
          ...themes.themeA.colors01,
          border: 0,
          outlineWidth: 0,
        },
      },
      testID: 'ChatInput_InputTextYrl',
      multiline: true,
      numberOfLines: 4,
      placeholder: 'Message',
      placeholderTextColor: '#a2acb4',
      value: inputChat[idProfileActive],
    },
    sendIconYrlProps: {
      library: 'Ionicons',
      name: 'send',
      styleProps: { IconYrl: { cursor: 'pointer' } },
      size: 24,
      color: themes['themeA'].colors02.color,
      testID: 'TopBarChatCardsComponent_IconYrl_search',
    },
  }

  return (
    <View style={[style.ChatInput]} testID='ChatInput'>
      <View style={[style.inputButton]} testID='ChatInput_inputButton'>
        <InputTextYrl {...propsOut.inputTextYrlProps} />
        <View style={[style.iconYrlWrapper]} testID='iconYrlWrapper'>
          <IconYrl {...propsOut.sendIconYrlProps} />
        </View>
      </View>
    </View>
  )
}

export const ChatInput = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(ChatInputComponent)
)
