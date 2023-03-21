import { User } from '../../../@types/User'

export interface MessagePropsType {
  id: string | number
  text: string
  createdAt: Date | number | string
  position: string
  isMessageTailed: boolean
  user: User
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
