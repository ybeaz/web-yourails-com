import { MessageType } from '../../@types/MessageType'

import { messages01R } from './messages01RMock'
import { messages02D } from './messages02DMock'

export const messages: Omit<MessageType, 'position' | 'isTail'>[] = [
  ...messages01R,
  ...messages02D,
]
