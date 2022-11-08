import { chatsMock } from '../mockJson/chatsMock'
import { messagesMock } from '../mockJson/messagesMock'
import { deliveriesMock } from '../mockJson/deliveriesMock'

type MessageData = {
  type: string
  value: string
}

type Message = {
  messageId?: string
  messageIdOwner?: string
  messageIdChat?: string
  messageData?: MessageData[]
  deliveryId: string
  deliveryDateSent: Date
  deliveryDateRecieved: Date
}

type Chat = {
  chatId?: string
  chatIdProfiles?: string[]
  messages?: Message[]
}

interface IReadChatsForProfileId {
  (_: unknown, options: { profileId: string; limit: number }): Chat[]
}

export const readChatsForProfileId: IReadChatsForProfileId = (_, options) => {
  const { profileId, limit } = options

  /** @comment to filter chats mathing the profileId */
  const chats = chatsMock.filter(item => {
    let output = false
    const chatIdProfiles = item && item.chatIdProfiles
    if (chatIdProfiles && chatIdProfiles.includes(profileId)) output = true
    return output
  })

  /** @comment for each chat filter delivered messages and find messages themselves */
  const chatsNext = chats.map(item => {
    const chatId = item && item.chatId

    const messagesDelivered = deliveriesMock.filter(item => {
      return item && item.deliveryIdChat === chatId && item.deliveryDateRecieved
    })

    const messages = messagesDelivered.map(itemDelivered => {
      const { deliveryId, deliveryDateSent, deliveryDateRecieved } =
        itemDelivered

      const message = messagesMock.find(
        itemMessage => itemMessage.messageId === itemDelivered.deliveryIdMessage
      )

      return { ...message, deliveryId, deliveryDateSent, deliveryDateRecieved }
    })

    return { ...item, messages }
  })

  return chatsNext
}

const exampleOutput = [
  {
    chatId: 'chatId-01',
    chatIdProfiles: ['profileid-01', 'profileid-03'],
    messages: [
      {
        messageId: 'messageId-01',
        messageIdOwner: 'profileid-01',
        messageIdChat: 'chatId-01',
        messageData: [{ type: 'text', value: 'text-01' }],
        deliveryId: 'deliveryId-01',
        deliveryDateSent: '2022-11-01T08:00:00.000Z',
        deliveryDateRecieved: '2022-11-01T09:00:00.000Z',
      },
      {
        messageId: 'messageId-02',
        messageIdOwner: 'profileid-03',
        messageIdChat: 'chatId-01',
        messageData: [{ type: 'text', value: 'text-02' }],
        deliveryId: 'deliveryId-02',
        deliveryDateSent: '2022-11-01T08:00:00.000Z',
        deliveryDateRecieved: '2022-11-01T09:00:00.000Z',
      },
    ],
  },
]
