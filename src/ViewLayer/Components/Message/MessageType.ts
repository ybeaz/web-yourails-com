import { UserType } from '../../../@types/UserType'

export interface MessagePropsType {
  id: string | number
  idUser: string | number
  user: UserType
  text: string
  createdAt: Date | number | string
  position: string
  isMessageTailed: boolean
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
