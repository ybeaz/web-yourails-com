import { MessageType } from '../@types/MessageType'
import { MessageEventType } from '../@types/MessageEventType'

export const messages02D: Omit<MessageType, 'position' | 'isTail'>[] = [
  {
    createdAt: 1673904347000,
    messageID: '0',
    conversationID: '["1","2"]',
    profileID: 'vzySSmoyGvGT',
    eventType: MessageEventType['chatMessage'],
    text: 'Hi! Need an electrician for some lighting fixtures.',
  },
  {
    createdAt: 1673904967000,
    messageID: '1',
    conversationID: '["1","2"]',
    profileID: '2',
    eventType: MessageEventType['chatMessage'],
    text: 'Hey there! What are you thinking?',
  },
  {
    createdAt: 1673905580000,
    messageID: '3',
    conversationID: '["1","2"]',
    profileID: 'vzySSmoyGvGT',
    eventType: MessageEventType['chatMessage'],
    text: 'Recessed lights in living & kitchen, new chandelier in dining. Got any recommendations?',
  },
  {
    createdAt: 1673906187000,
    messageID: '4',
    conversationID: '["1","2"]',
    profileID: '2',
    eventType: MessageEventType['chatMessage'],
    text: "Sure thing! What's your budget?",
  },
  {
    createdAt: 1673906807000,
    messageID: '5',
    conversationID: '["1","2"]',
    profileID: 'vzySSmoyGvGT',
    eventType: MessageEventType['chatMessage'],
    text: 'Around $1500, including everything.',
  },
  {
    createdAt: 1673907431000,
    messageID: '6',
    conversationID: '["1","2"]',
    profileID: '2',
    eventType: MessageEventType['chatMessage'],
    text: 'Got it. When can I take a look at the space??',
  },
  {
    createdAt: 1673908047000,
    messageID: '7',
    conversationID: '["1","2"]',
    profileID: 'vzySSmoyGvGT',
    eventType: MessageEventType['chatMessage'],
    text: 'How is about this Saturday around the noon?',
  },
  {
    createdAt: 1673908667000,
    messageID: '8',
    conversationID: '["1","2"]',
    profileID: '2',
    eventType: MessageEventType['chatMessage'],
    text: 'That works for me, see you then!',
  },
]
