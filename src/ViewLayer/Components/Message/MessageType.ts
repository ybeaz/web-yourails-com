import { IdUserType } from '../../../@types/UserType'
import { MessageEventType } from '../../../@types/MessageEventType'

export interface MessagePropsType {
  idMessage?: string
  idProfile: IdUserType
  eventType: MessageEventType
  text: string
  createdAt?: number
  position?: string
  isTail?: boolean
  image?: string
  video?: string
  audio?: string
  isSystem?: boolean
  isSent?: boolean
  isReceived?: boolean
  isPending?: boolean
}

/**
 * @import import { MessageType } from './MessageType'
 */
export interface MessageType extends React.FunctionComponent<MessagePropsType> {
  (props: MessagePropsType): React.ReactElement
}
