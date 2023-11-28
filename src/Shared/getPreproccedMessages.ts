import { IdUserType } from '../@types/UserType'
import { MessageType } from '../@types/MessageType'

interface getPreproccedMessagesType {
  (
    messages: Omit<MessageType, 'position' | 'isTail'>[],
    options: { profileHostID: IdUserType; printRes: boolean }
  ): MessageType[]
}

/**
 * @description Function to preprocess messages to render them correcty: right/left, with tails/ without
 * @import import { getPreproccedMessages } from '../../../Shared/getPreproccedMessages'
 */

export const getPreproccedMessages: getPreproccedMessagesType = (
  messages,
  { profileHostID, printRes }
) => {
  const messagesNext: MessageType[] = messages.map(
    (message: Omit<MessageType, 'position' | 'isTail'>, index: number) => {
      const messagesLen = messages.length
      const { profileID } = message
      const idUserPrev =
        index - 1 >= 0 ? messages[index - 1].profileID : undefined
      const userIDNext =
        index + 1 < messagesLen ? messages[index + 1].profileID : undefined

      const position = profileID === profileHostID ? 'right' : 'left'

      let isTail = false
      if (profileID !== userIDNext) isTail = true
      else if (idUserPrev && userIDNext && profileID === userIDNext)
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
