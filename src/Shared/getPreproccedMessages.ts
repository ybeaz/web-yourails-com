import { IdUserType } from '../@types/UserType'
import { MessageType } from '../@types/MessageType'

interface getPreproccedMessagesType {
  (
    messages: Omit<MessageType, 'position' | 'isTail'>[],
    idProfile: IdUserType
  ): MessageType[]
}

/**
 * @description Function to preprocess messages to render them correcty: right/left, with tails/ without
 * @import import { getPreproccedMessages } from '../../../Shared/getPreproccedMessages'
 */

export const getPreproccedMessages: getPreproccedMessagesType = (
  messages,
  idProfileHost
) => {
  const messagesNext: MessageType[] = messages.map(
    (item: Omit<MessageType, 'position' | 'isTail'>, index: number) => {
      const messagesLen = messages.length
      const { idProfile } = item
      const idUserPrev =
        index - 1 >= 0 ? messages[index - 1].idProfile : undefined
      const idUserNext =
        index + 1 < messagesLen ? messages[index + 1].idProfile : undefined

      const position = idProfile === idProfileHost ? 'right' : 'left'

      let isTail = false
      if (idProfile !== idUserNext) isTail = true
      else if (idUserPrev && idUserNext && idProfile === idUserNext)
        isTail = false

      const itemNext = { ...item, position, isTail }

      return itemNext
    }
  )

  return messagesNext
}
