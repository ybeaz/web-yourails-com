import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import dayjs from 'dayjs'

import { MessageType } from './MessageType'
import { MessageStyles as styles } from './MessageStyle'
import { themes } from '../../Styles/themes'
import { TriangleCorner } from '../TriangleCorner/TriangleCorner'
import { LOCALE, TIME_FORMAT } from '../../../Constants/locale.const'

/**
 * @import import { Message } from '../Message/Message'
 */
const MessageComponent: MessageType = props => {
  const {
    id,
    text,
    createdAt,
    user,
    position,
    isMessageTailed,
    image,
    video,
    audio,
    isSystem,
    isSent,
    isReceived,
    isPending,
  } = props

  const propsOut = {
    TriangleCorner: {
      isShow: !!isMessageTailed,
      styleProps: StyleSheet.create({ borderColor: themes['themeA'].colors06 }),
    },
  }

  const roundAllCornersStyle = !isMessageTailed
    ? styles.roundAllCorners.style
    : {}

  const dateString = dayjs(createdAt).locale(LOCALE).format(TIME_FORMAT)

  return (
    <SafeAreaView style={[styles[position].Message]} testID='Message'>
      <TriangleCorner {...propsOut.TriangleCorner} />
      <SafeAreaView
        style={[
          styles[position].content,
          themes['themeA'].colors01,
          roundAllCornersStyle,
        ]}
        testID='content'
      >
        <Text style={[styles[position].text]} testID='text'>
          {text}
        </Text>
        <Text style={[styles[position].text]} testID='text'>
          {dateString}
        </Text>
      </SafeAreaView>
    </SafeAreaView>
  )
}

export const Message = React.memo(MessageComponent)
