import { IdUserType } from '../@types/UserType'
import { MessageType } from '../@types/MessageType'

interface getPreproccedMessagesType {
  (
    messages: Omit<MessageType, 'position' | 'isTail'>[],
    options: { idProfileHost: IdUserType; printRes: boolean }
  ): MessageType[]
}

/**
 * @description Function to preprocess messages to render them correcty: right/left, with tails/ without
 * @import import { getPreproccedMessages } from '../../../Shared/getPreproccedMessages'
 */

export const getPreproccedMessages: getPreproccedMessagesType = (
  messages,
  { idProfileHost, printRes }
) => {
  const messagesNext: MessageType[] = messages.map(
    (message: Omit<MessageType, 'position' | 'isTail'>, index: number) => {
      const messagesLen = messages.length
      const { idProfile } = message
      const idUserPrev =
        index - 1 >= 0 ? messages[index - 1].idProfile : undefined
      const idUserNext =
        index + 1 < messagesLen ? messages[index + 1].idProfile : undefined

      const position = idProfile === idProfileHost ? 'right' : 'left'

      let isTail = false
      if (idProfile !== idUserNext) isTail = true
      else if (idUserPrev && idUserNext && idProfile === idUserNext)
        isTail = false

      const messageNext = { ...message, position, isTail }

      return messageNext
    }
  )

  if (printRes) {
    console.log('getPreproccedMessages [43]', { messagesNext })
  }

  return messagesNext
}
