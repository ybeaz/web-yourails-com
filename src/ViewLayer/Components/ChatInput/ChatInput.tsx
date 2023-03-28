import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { SafeAreaView, Text } from 'react-native'

import { ButtonYrl } from '../../../ViewLibrary/ButtonYrl/ButtonYrl'
import { InputTextYrl } from '../../../ViewLibrary/InputTextYrl/InputTextYrl'
import { IconYrl } from '../../../ViewLibrary/IconYrl/IconYrl'
import { ChatInputType } from './ChatInputType'
import { ChatInputStyle as style } from './ChatInputStyle'
import { themes } from '../../Styles/themes'

const ChatInputComponent: ChatInputType = props => {
  const propsOut = {
    inputTextYrlProps: {
      onChangeText: (text: string) => {},
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
    },
    sendIconYrlProps: {
      library: 'Ionicons',
      name: 'ios-send',
      styleProps: { IconYrl: { cursor: 'pointer' } },
      size: '1.5rem',
      color: themes['themeA'].colors02.color,
      testID: 'TopBarChatCardsComponent_IconYrl_search',
    },
  }

  return (
    <SafeAreaView style={[style.ChatInput]} testID='ChatInput'>
      <SafeAreaView style={[style.inputButton]} testID='ChatInput_inputButton'>
        <InputTextYrl {...propsOut.inputTextYrlProps} />
        <SafeAreaView style={[style.iconYrlWrapper]} testID='iconYrlWrapper'>
          <IconYrl {...propsOut.sendIconYrlProps} />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  )
}

export const ChatInput = React.memo(ChatInputComponent)
