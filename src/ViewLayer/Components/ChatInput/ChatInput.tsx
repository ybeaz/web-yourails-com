import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text } from 'react-native'

import { ButtonYrl } from '../../../ViewLibrary/ButtonYrl/ButtonYrl'
import { InputTextYrl } from '../../../ViewLibrary/InputTextYrl/InputTextYrl'
import { InputTextYrlPropsType } from '../../../ViewLibrary/InputTextYrl/InputTextYrlType'
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
        },
      },
      testID: 'ChatInput_InputTextYrl',
      multiline: true,
      numberOfLines: 4,
      placeholder: 'Message',
      placeholderTextColor: '#a2acb4',
    },
    buttonYrlProps: {
      testID: 'ChatInput_ButtonYrl',
      styleProps: {
        ButtonYrl: style.ButtonYrl,
        title: {
          ...style.ButtonTitle,
          ...themes.themeA.colors02,
        },
      },
      titleText: 'Send',
    },
  }

  return (
    <View style={[style.ChatInput]} testID='ChatInput'>
      <View style={[style.inputButton]} testID='ChatInput_inputButton'>
        <InputTextYrl {...propsOut.inputTextYrlProps} />
        <ButtonYrl {...propsOut.buttonYrlProps} />
      </View>
    </View>
  )
}

export const ChatInput = React.memo(ChatInputComponent)
