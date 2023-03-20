import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { MessageType } from './MessageType'
import { MessageStyles as styles } from './MessageStyle'

/**
 * @import import { Message } from '../Message/Message'
 */
export const Message: MessageType = props => {
  const {
    id,
    text,
    createdAt,
    user,
    position,
    image,
    video,
    audio,
    isSystem,
    isSent,
    isReceived,
    isPending,
  } = props

  const store = useSelector((store2: RootStoreType) => store2)

  const propsOut = {}

  return (
    <View style={[styles[position].Message]} testID='Message'>
      <View style={[styles[position].content]} testID='content'>
        <Text style={[styles[position].text]} testID='text'>
          {text}
        </Text>
      </View>
    </View>
  )
}
