import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { ButtonYrl } from '../../../ViewLibrary/ButtonYrl/ButtonYrl'
import { ChatInputType } from './ChatInputType'
import { ChatInputStyle as style } from './ChatInputStyle'

export const ChatInput: ChatInputType = props => {
  const store = useSelector((store2: RootStoreType) => store2)

  const propsOut = {
    buttonYrlProps: {},
  }

  return (
    <View testID='ChatInput' style={style.ChatInput}>
      <ButtonYrl {...propsOut.buttonYrlProps} />
    </View>
  )
}
