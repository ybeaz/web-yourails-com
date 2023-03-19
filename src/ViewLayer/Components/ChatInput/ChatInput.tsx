import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { ButtonYrl } from '../../../ViewLibrary/ButtonYrl/ButtonYrl'
import { InputTextYrl } from '../../../ViewLibrary/InputTextYrl/InputTextYrl'
import { InputTextYrlPropsType } from '../../../ViewLibrary/InputTextYrl/InputTextYrlType'
import { ChatInputType } from './ChatInputType'
import { ChatInputStyle as style } from './ChatInputStyle'
import { themes } from '../../Styles/Themes'

export const ChatInput: ChatInputType = props => {
  const store = useSelector((store2: RootStoreType) => store2)

  const propsOut = {
    inputTextYrlProps: {
      onChangeText: (text: string) => {},
      styleProps: {
        InputTextYrl: {},
        inputText: { ...style.inputText, ...themes.themeA.colorPair01 },
      },
      testID: 'ChatInputInputText',
    },
    buttonYrlProps: {},
  }

  return (
    <View style={[style.ChatInput]} testID='ChatInput'>
      <InputTextYrl {...propsOut.inputTextYrlProps} />
      {/* <ButtonYrl {...propsOut.buttonYrlProps} /> */}
    </View>
  )
}
