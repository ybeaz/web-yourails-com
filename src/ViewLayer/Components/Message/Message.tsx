import React from 'react'
import { View, StyleSheet } from 'react-native'
import dayjs from 'dayjs'

import { ImageYrl } from '../../../YrlNativeViewLibrary'
import { Text } from '../../Components/Text/Text'
import { MessageType } from './MessageType'
import { styles } from './MessageStyle'
import { themes } from '../../Styles/themes'
import { TriangleCorner } from '../TriangleCorner/TriangleCorner'
import { LOCALE, TIME_FORMAT } from '../../../Constants/locale.const'

/**
 * @import import { Message } from '../Message/Message'
 */
const MessageComponent: MessageType = props => {
  const {
    idMessage,
    idProfile,
    eventType,
    text,
    createdAt,
    position = 'right',
    isTail = false,
    image,
    video,
    audio,
    isSystem,
    isSent,
    isReceived,
    isPending,
    pendingImage,
  } = props

  const roundAllCornersStyle = !isTail ? styles.roundAllCorners.style : {}

  const dateString = dayjs(createdAt).locale(LOCALE).format(TIME_FORMAT)

  const propsOut: Record<string, any> = {
    imageYrlProps: {
      styleProps: {
        ImageYrl: { paddingRight: '0.5rem' },
        image: {
          height: '4rem',
          width: '4rem',
        },
      },
      testID: 'ImageYrl',
      uri: pendingImage, // 'https://yourails.com/images/loading/loading09.gif'
      resizeMode: 'cover', // 'cover' | 'contain' | 'stretch' | 'repeat' | 'center'
    },
    triangleCorner: {
      isShow: !!isTail,
      styleProps: {
        borderColor: themes['themeA'].colors06,
      },
    },
  }

  return (
    <View style={[styles[position].Message]} testID='Message'>
      <TriangleCorner {...propsOut.triangleCorner} />
      <View
        style={[
          styles[position].content,
          themes['themeA'].colors01,
          roundAllCornersStyle,
        ]}
        testID='content'
      >
        <View style={[styles[position].messageWrapper]} testID='messageWrapper'>
          {isPending && <ImageYrl {...propsOut.imageYrlProps} />}
          <Text style={[styles[position].text]} testID='text'>
            {text}
          </Text>
        </View>
        <Text
          style={[styles[position].dateString, { color: 'grey' }]}
          testID='dateString'
        >
          {dateString}
        </Text>
      </View>
    </View>
  )
}

export const Message = React.memo(MessageComponent)
