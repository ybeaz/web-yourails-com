import { IdUserType } from '../../../@types/UserType'
import { EventType } from '../../../@types/EventType'

export interface MessagePropsType {
  idMessage: string
  idProfile: IdUserType
  eventType: EventType
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
