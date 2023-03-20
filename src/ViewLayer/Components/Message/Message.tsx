import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { MessageType } from './MessageType'
import { MessageStyle as style } from './MessageStyle'

export const Message: MessageType = props => {
  const store = useSelector((store2: RootStoreType) => store2)

  const propsOut = {}

  return (
    <View testID='Message' style={style.Message}>
      null
    </View>
  )
}
