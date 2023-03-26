import { UserType } from '../../../@types/UserType'
import { MessageType } from '../../../@types/MessageType'

export interface ChatSpacePropsType {
  styleProps?: any
  users: UserType[]
  messages: MessageType[]
}

/**
 * @import import { ChatSpaceType } from './ChatSpaceType'
 */
export interface ChatSpaceType
  extends React.FunctionComponent<ChatSpacePropsType> {
  (props: ChatSpacePropsType): React.ReactElement
}
