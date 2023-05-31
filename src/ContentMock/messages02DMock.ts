import { MessageType } from '../@types/MessageType'
import { EventType } from '../@types/EventType'

export const messages02D: Omit<MessageType, 'position' | 'isTail'>[] = [
  {
    createdAt: 1673904347000,
    idMessage: '0',
    idConversation: '["1","2"]',
    idProfile: '1',
    eventType: EventType['chatMessage'],
    text: 'Hi! Need an electrician for some lighting fixtures.',
  },
  {
    createdAt: 1673904967000,
    idMessage: '1',
    idConversation: '["1","2"]',
    idProfile: '2',
    eventType: EventType['chatMessage'],
    text: 'Hey there! What are you thinking?',
  },
  {
    createdAt: 1673905580000,
    idMessage: '3',
    idConversation: '["1","2"]',
    idProfile: '1',
    eventType: EventType['chatMessage'],
    text: 'Recessed lights in living & kitchen, new chandelier in dining. Got any recommendations?',
  },
  {
    createdAt: 1673906187000,
    idMessage: '4',
    idConversation: '["1","2"]',
    idProfile: '2',
    eventType: EventType['chatMessage'],
    text: "Sure thing! What's your budget?",
  },
  {
    createdAt: 1673906807000,
    idMessage: '5',
    idConversation: '["1","2"]',
    idProfile: '1',
    eventType: EventType['chatMessage'],
    text: 'Around $1500, including everything.',
  },
  {
    createdAt: 1673907431000,
    idMessage: '6',
    idConversation: '["1","2"]',
    idProfile: '2',
    eventType: EventType['chatMessage'],
    text: 'Got it. When can I take a look at the space??',
  },
  {
    createdAt: 1673908047000,
    idMessage: '7',
    idConversation: '["1","2"]',
    idProfile: '1',
    eventType: EventType['chatMessage'],
    text: 'How is about this Saturday around the noon?',
  },
  {
    createdAt: 1673908667000,
    idMessage: '8',
    idConversation: '["1","2"]',
    idProfile: '2',
    eventType: EventType['chatMessage'],
    text: 'That works for me, see you then!',
  },
]
