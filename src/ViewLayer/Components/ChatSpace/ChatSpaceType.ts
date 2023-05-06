import { IdUserType } from '../../../@types/UserType'
import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'
import { ProfileType } from '../../../@types/ProfileType'
import { MessageType } from '../../../@types/MessageType'

export interface ChatSpacePropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  idProfileHost: IdUserType
  profileActive: ProfileType
  messages: Omit<MessageType, 'position' | 'isTail'>[]
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
