import React, { ReactElement } from 'react'
import { StyleSheet, View, ImageResizeMode } from 'react-native'
import dayjs from 'dayjs'

import MarkdownDisplay from 'react-native-markdown-display'
import { ImageYrl } from '../../../YrlNativeViewLibrary'
import { Text } from '../../Components/Text/Text'
import { MessageType } from './MessageType'
import { styles } from './MessageStyle'
import { markdownStyles } from './MarkdownStyle'
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
    imagePendingSrc,
  } = props

  const dateString = dayjs(createdAt).locale(LOCALE).format(TIME_FORMAT)

  const contentObj = JSON.parse(text)
  const { contentType } = contentObj

  const roundAllCornersStyle = !isTail ? styles.roundAllCorners.style : {}

  const getTextComponentsFromTextArray = (
    textArrayIn: string[],
    position: string
  ): ReactElement[] => {
    return textArrayIn.map((textItem: string, index: number) => {
      return (
        <Text
          key={`textItem-${index}`}
          style={[styles[position].text]}
          testID='textItem'
        >
          {position === 'right' ? (
            textItem
          ) : (
            /* @ts-ignore */
            <MarkdownDisplay style={markdownStyles}>{textItem}</MarkdownDisplay>
          )}
        </Text>
      )
    })
  }

  const getImageComponentsFromImageArray = (
    imageArrayIn: string[]
  ): ReactElement[] => {
    return imageArrayIn.map((textItem: string, index: number) => {
      const resizeMode: ImageResizeMode = 'cover'

      const propsOut = {
        messageImageYrlProps: {
          key: `messageImageYrl-${index}`,
          styleProps: {
            ImageYrl: { paddingRight: '0.5rem' },
            image: {
              height: '15vw',
              width: '15vw',
            },
          },
          testID: 'messageImageYrl',
          uri: textItem,
          resizeMode, // 'cover' | 'contain' | 'stretch' | 'repeat' | 'center'
        },
      }

      return <ImageYrl {...propsOut.messageImageYrlProps} />
    })
  }

  let messageContentOutput: any = ''
  let widthContentStyle = {}
  if (contentType === 'textArray')
    messageContentOutput = getTextComponentsFromTextArray(
      contentObj[contentType],
      position
    )
  else if (contentType === 'imageArray') {
    messageContentOutput = getImageComponentsFromImageArray(
      contentObj[contentType]
    )
    widthContentStyle = {
      maxWidth: '100%',
    }
  }

  const resizeMode: ImageResizeMode = 'cover'

  const propsOut: Record<string, any> = {
    pendingImageYrlProps: {
      styleProps: {
        ImageYrl: { paddingRight: '0.5rem' },
        image: {
          height: '4rem',
          width: '4rem',
        },
      },
      testID: 'pendingImageYrl',
      uri: imagePendingSrc, // 'https://yourails.com/images/loading/loading09.gif'
      resizeMode, // 'cover' | 'contain' | 'stretch' | 'repeat' | 'center'
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
          widthContentStyle,
        ]}
        testID='content'
      >
        <View style={[styles[position].messageWrapper]} testID='messageWrapper'>
          {isPending && <ImageYrl {...propsOut.pendingImageYrlProps} />}
          <Text style={[styles[position].text]} testID='text'>
            {messageContentOutput}
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
