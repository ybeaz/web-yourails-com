import { v4 as uuid } from 'uuid'

import { IdUserType } from '../@types/UserType'
import { MessageType } from '../@types/MessageType'
import { MessageEventType } from '../@types/MessageEventType'
import { ContentType } from '../@types/ContentType'
import { getSortedArray } from './getSortedArray'

export type GetCreatedMessageParamsType = {
  profileSenderID: IdUserType
  profileReceiverID: IdUserType
  text: string
  createdAt?: number
  isPending?: boolean
}

export type GetCreatedMessageResType = MessageType

interface GetCreatedMessageType {
  (
    params: GetCreatedMessageParamsType,
    options?: {
      addMs?: number
      isIdMessage?: boolean
      isCreatedAt?: boolean
      printRes: boolean
    }
  ): GetCreatedMessageResType
}

/**
 * @description Function to getCreatedMessage
 * @import import { getCreatedMessage } from './getCreatedMessage'
 */

export const getCreatedMessage: GetCreatedMessageType = (params, options) => {
  const { profileSenderID, profileReceiverID, text, createdAt, isPending } =
    params
  const addMs = options?.addMs ? options?.addMs : 0

  const conversationID = JSON.stringify(
    getSortedArray([profileSenderID, profileReceiverID])
  )

  const textObj = {
    contentType: ContentType['textArray'],
    contentArray: [text],
  }
  const textNext = JSON.stringify(textObj)

  const message: MessageType = {
    conversationID,
    profileID: profileSenderID,
    text: textNext,
    eventType: MessageEventType['chatMessage'],
  }

  if (isPending) message.isPending = isPending
  if (createdAt) message.createdAt = createdAt
  if (options?.isIdMessage) message.messageID = uuid()
  if (options?.isCreatedAt) message.createdAt = +new Date() + addMs

  if (options?.printRes) {
    console.log('getCreatedMessage', 'message', message)
  }

  return message
}
