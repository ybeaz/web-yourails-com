import { MessageType } from '../@types/MessageType'

interface getPreproccedMessagesType {
  (
    messages: Omit<MessageType, 'position' | 'isTail'>[],
    idUserHost: string
  ): MessageType[]
}

/**
 * @description Function to preprocess messages to render them correcty: right/left, with tails/ without
 * @import import { getPreproccedMessages } from '../../../Shared/getPreproccedMessages'
 */

export const getPreproccedMessages: getPreproccedMessagesType = (
  messages,
  idUserHost
) => {
  const messagesNext: MessageType[] = messages.map(
    (item: Omit<MessageType, 'position' | 'isTail'>, index: number) => {
      const messagesLen = messages.length
      const { idUser } = item
      const idUserPrev = index - 1 >= 0 ? messages[index - 1].idUser : undefined
      const idUserNext =
        index + 1 < messagesLen ? messages[index + 1].idUser : undefined

      const position = idUser === idUserHost ? 'right' : 'left'

      let isTail = false
      if (idUser !== idUserNext) isTail = true
      else if (idUserPrev && idUserNext && idUser === idUserNext) isTail = false

      const itemNext = { ...item, position, isTail }

      return itemNext
    }
  )

  return messagesNext
}
