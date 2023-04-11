import { MessageType } from '../@types/MessageType'

export const messages: Omit<MessageType, 'position' | 'isTail'>[] = [
  {
    createdAt: 1673904347000,
    idMessage: '0',
    idUser: '3',
    text: 'Hi! Need an electrician for some lighting fixtures.',
  },
  {
    createdAt: 1673904967000,
    idMessage: '1',
    idUser: '2',
    text: 'Hey there! What are you thinking?',
  },
  {
    createdAt: 1673905580000,
    idMessage: '3',
    idUser: '3',
    text: 'Recessed lights in living & kitchen, new chandelier in dining. Got any recommendations?',
  },
  {
    createdAt: 1673906187000,
    idMessage: '4',
    idUser: '2',
    text: "Sure thing! What's your budget?",
  },
  {
    createdAt: 1673906807000,
    idMessage: '5',
    idUser: '3',
    text: 'Around $1500, including everything.',
  },
  {
    createdAt: 1673907431000,
    idMessage: '6',
    idUser: '2',
    text: 'Got it. When can I take a look at the space??',
  },
  {
    createdAt: 1673908047000,
    idMessage: '7',
    idUser: '3',
    text: 'How is about this Saturday around the noon?',
  },
  {
    createdAt: 1673908667000,
    idMessage: '8',
    idUser: '2',
    text: 'That works for me, see you then!',
  },
]
