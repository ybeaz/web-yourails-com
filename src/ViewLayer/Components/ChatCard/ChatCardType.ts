import { User } from '../../../@types/User'

export interface ChatCardPropsType {
  styleProps?: any
  user: User
}

/**
 * @import import { ChatCardType } from './ChatCardType'
 */
export interface ChatCardType
  extends React.FunctionComponent<ChatCardPropsType> {
  (props: ChatCardPropsType): React.ReactElement
}
