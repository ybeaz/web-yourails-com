import { MessageType } from '../@types/MessageType'

export const messages: MessageType[] = [
  {
    createdAt: 1,
    id: '1',
    idUser: '0',
    text: '0-0 Hello developer',
  },
  {
    createdAt: 2,
    id: '1',
    idUser: '0',
    text: '0-1 I am another developer',
  },
  {
    createdAt: 3,
    id: 'y3pp3EGkPuaZTsMi_S0fu',
    idUser: '0',
    text: '0-2 I say you hello',
  },
  {
    createdAt: 4,
    id: 'y3pp3EGkPuaZTsMi_g6t5',
    idUser: '1',
    text: '1-0 Hey developer',
  },
  {
    createdAt: 5,
    id: 'y3pp3EGkPuaZTsMi_g6t5',
    idUser: '1',
    text: '1-1 Nice to hear you',
  },
  {
    createdAt: 6,
    id: 'y3pp3EGkPuaZTsMi_g6t5',
    idUser: '0',
    text: '0-3 Whats up?',
  },
  {
    createdAt: 7,
    id: 'y3pp3EGkPuaZTsMi_g6t5',
    idUser: '1',
    text: '1-2 Nothing special',
  },
]

export const messagesPreprocceced: MessageType[] = [
  {
    createdAt: 1,
    id: '1',
    idUser: '0',
    text: '0-0 Hello developer',
    position: 'right',
    isTail: false,
  },
  {
    createdAt: 2,
    id: '1',
    idUser: '0',
    text: '0-1 I am another developer',
    position: 'right',
    isTail: false,
  },
  {
    createdAt: 3,
    id: 'y3pp3EGkPuaZTsMi_S0fu',
    idUser: '0',
    text: '0-2 I say you hello',
    position: 'right',
    isTail: true,
  },
  {
    createdAt: 4,
    id: 'y3pp3EGkPuaZTsMi_g6t5',
    idUser: '1',
    text: '1-0 Hey developer',
    position: 'right',
    isTail: false,
  },
  {
    createdAt: 5,
    id: 'y3pp3EGkPuaZTsMi_g6t5',
    idUser: '1',
    text: '1-1 Nice to hear you',
    position: 'left',
    isTail: true,
  },
  {
    createdAt: 6,
    id: 'y3pp3EGkPuaZTsMi_g6t5',
    idUser: '0',
    text: '0-3 Whats up?',
    position: 'right',
    isTail: true,
  },
  {
    createdAt: 7,
    id: 'y3pp3EGkPuaZTsMi_g6t5',
    idUser: '1',
    text: '1-2 Nothing special',
    position: 'left',
    isTail: true,
  },
]
