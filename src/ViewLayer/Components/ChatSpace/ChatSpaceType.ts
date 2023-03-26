import { UserType } from '../../../@types/UserType'
import { MessageType } from '../../../@types/MessageType'

export interface ChatSpacePropsType {
  styleProps?: any
  users: UserType[]
  messages: MessageType[]
  modalFrame: any
}

/**
 * @import import { ChatSpaceType } from './ChatSpaceType'
 */
export interface ChatSpaceType
  extends React.FunctionComponent<ChatSpacePropsType> {
  (props: ChatSpacePropsType): React.ReactElement
}
