import { MessageType } from '../@types/MessageType'

/*
Individual: Hi! Need an electrician for some lighting fixtures.

Electrician: Hey there! What are you thinking?

Individual: Recessed lights in living & kitchen, new chandelier in dining. Got any recommendations?

Electrician: Sure thing! What's your budget?

Individual: Around $1500, including everything.

Electrician: Got it. When can I take a look at the space?

 1673904347
 1673904967
 1673905580
 1673906187
 1673906807
 1673907431
 1673908047
 1673908667
*/

export const messages: Omit<MessageType, 'position' | 'isTail'>[] = [
  {
    createdAt: 1673904347000,
    id: '0',
    idUser: '2',
    text: 'Hi! Need an electrician for some lighting fixtures.',
  },
  {
    createdAt: 1673904967000,
    id: '1',
    idUser: '1',
    text: 'Hey there! What are you thinking?',
  },
  {
    createdAt: 1673905580000,
    id: '3',
    idUser: '2',
    text: 'Recessed lights in living & kitchen, new chandelier in dining. Got any recommendations?',
  },
  {
    createdAt: 1673906187000,
    id: '4',
    idUser: '1',
    text: "Sure thing! What's your budget?",
  },
  {
    createdAt: 1673906807000,
    id: '5',
    idUser: '2',
    text: 'Around $1500, including everything.',
  },
  {
    createdAt: 1673907431000,
    id: '6',
    idUser: '1',
    text: 'Got it. When can I take a look at the space??',
  },
  {
    createdAt: 1673908047000,
    id: '7',
    idUser: '2',
    text: 'How is about this Saturday around the noon?',
  },
  {
    createdAt: 1673908667000,
    id: '8',
    idUser: '1',
    text: 'That works for me, see you then!',
  },
]
