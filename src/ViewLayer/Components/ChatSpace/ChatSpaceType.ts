import { UseMediaQueryResType } from '../../Hooks/useMediaQueryRes'
import { UserType } from '../../../@types/UserType'
import { MessageType } from '../../../@types/MessageType'

export interface ChatSpacePropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResType
  users: UserType[]
  messages: MessageType[]
  modalFrame: any
  handleEvents: any
}

/**
 * @import import { ChatSpaceType } from './ChatSpaceType'
 */
export interface ChatSpaceType
  extends React.FunctionComponent<ChatSpacePropsType> {
  (props: ChatSpacePropsType): React.ReactElement
}
