import { v4 as uuid } from 'uuid'

import { IdUserType } from '../@types/UserType'
import { MessageType } from '../@types/MessageType'
import { MessageEventType } from '../@types/MessageEventType'
import { ContentType } from '../@types/ContentType'
import { getSortedArray } from './getSortedArray'

export type GetCreatedMessageParamsType = {
  idProfileSender: IdUserType
  idProfileReceiver: IdUserType
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
  const { idProfileSender, idProfileReceiver, text, createdAt, isPending } =
    params
  const addMs = options?.addMs ? options?.addMs : 0

  const idConversation = JSON.stringify(
    getSortedArray([idProfileSender, idProfileReceiver])
  )

  const textObj = {
    contentType: ContentType['textArray'],
    textArray: [text],
  }
  const textNext = JSON.stringify(textObj)

  const message: MessageType = {
    idConversation,
    profileID: idProfileSender,
    text: textNext,
    eventType: MessageEventType['chatMessage'],
  }

  if (isPending) message.isPending = isPending
  if (createdAt) message.createdAt = createdAt
  if (options?.isIdMessage) message.idMessage = uuid()
  if (options?.isCreatedAt) message.createdAt = +new Date() + addMs

  if (options?.printRes) {
    console.log('getCreatedMessage', 'message', message)
  }

  return message
}
