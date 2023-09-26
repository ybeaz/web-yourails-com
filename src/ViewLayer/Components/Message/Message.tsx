import React, { ReactElement } from 'react'
import { View, ImageResizeMode } from 'react-native'
import dayjs from 'dayjs'

import MarkdownDisplay from 'react-native-markdown-display'
import {
  ImageYrl,
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { CopyThis } from '../CopyThis/CopyThis'
import { Text } from '../../Components/Text/Text'
import {
  MessagePropsOutType,
  MessageComponentType,
  MessageType,
} from './MessageType'
import { styles } from './MessageStyle'
import { markdownStyles } from './MarkdownStyle'
import { themes } from '../../Styles/themes'
import { TriangleCorner } from '../TriangleCorner/TriangleCorner'
import { LOCALE, TIME_FORMAT } from '../../../Constants/locale.const'
import { isValidJsonString } from '../../../Shared/isValidJsonString'
import { getPx } from '../../Styles/styleGlobal'

/**
 * @import import { Message } from '../Message/Message'
 */
const MessageComponent: MessageComponentType = props => {
  const {
    idMessage,
    text,
    createdAt,
    position = 'right',
    isTail = false,
    isPending,
    imagePendingSrc,
    mediaParams = mediaParamsDefault,
    // idProfile,
    // eventType,
    // image,
    // video,
    // audio,
    // isSystem,
    // isSent,
    // isReceived,
  } = props

  const { deviceType } = mediaParams
  const style = styles[deviceType]

  const dateString = dayjs(createdAt).locale(LOCALE).format(TIME_FORMAT)

  const contentObj = isValidJsonString(text)
    ? JSON.parse(text)
    : { contentType: 'textArray', textArray: [text] }
  const { contentType } = contentObj

  const roundAllCornersStyle = !isTail ? style.roundAllCorners.style : {}

  const getTextComponentsFromTextArray = (
    textArrayIn: string[],
    position: string
  ): ReactElement[] => {
    return textArrayIn.map((textItem: string, index: number) => {
      return (
        <Text
          key={`${idMessage}-${index}`}
          style={[style[position].text]}
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
            ImageYrl: { paddingRight: '0.5rem'.getPx() },
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
  let messageContextTextOutput: string = ''
  let widthContentStyle = {}
  if (contentType === 'textArray') {
    messageContentOutput = getTextComponentsFromTextArray(
      contentObj[contentType],
      position
    )
    messageContextTextOutput = contentObj[contentType].reduce(
      (accum: string, text: string) => {
        return `${accum} ${text}`
      },
      ''
    )
  } else if (contentType === 'imageArray') {
    messageContentOutput = getImageComponentsFromImageArray(
      contentObj[contentType]
    )
    widthContentStyle = {
      maxWidth: '100%',
    }
  }

  const resizeMode: ImageResizeMode = 'cover'
  // console.info('Message [125]', {
  //   copyThis: style[position].copyThis,
  //   position,
  // })

  const propsOut: MessagePropsOutType = {
    pendingImageYrlProps: {
      styleProps: {
        ImageYrl: { paddingRight: '0.5rem'.getPx() },
        image: {
          height: '4rem'.getPx(),
          width: '4rem'.getPx(),
        },
      },
      testID: 'pendingImageYrl',
      uri: imagePendingSrc, // 'https://yourails.com/images/loading/loading09.gif'
      resizeMode, // 'cover' | 'contain' | 'stretch' | 'repeat' | 'center'
    },
    triangleCornerProps: {
      isShow: !!isTail,
      styleProps: {
        borderColor: themes['themeA'].colors06,
      },
    },
    copyThisProps: {
      styleProps: {
        CopyThis: style[position].copyThis,
      },
      messageContent: messageContextTextOutput,
    },
  }

  return (
    <View style={[style[position].Message]} testID='Message'>
      {position === 'right' ? <CopyThis {...propsOut.copyThisProps} /> : null}
      <TriangleCorner {...propsOut.triangleCornerProps} />
      <View
        style={[
          style[position].content,
          themes['themeA'].colors01,
          roundAllCornersStyle,
          widthContentStyle,
        ]}
        testID='content'
      >
        <View style={[style[position].messageWrapper]} testID='messageWrapper'>
          {isPending && <ImageYrl {...propsOut.pendingImageYrlProps} />}
          <Text style={[style[position].text]} testID='text'>
            {messageContentOutput}
          </Text>
        </View>
        <Text
          style={[style[position].dateString, { color: 'grey' }]}
          testID='dateString'
        >
          {dateString}
        </Text>
      </View>
      {position === 'left' ? <CopyThis {...propsOut.copyThisProps} /> : null}
    </View>
  )
}

export const Message: MessageType = withParamsMediaYrl(
  React.memo(MessageComponent)
)
