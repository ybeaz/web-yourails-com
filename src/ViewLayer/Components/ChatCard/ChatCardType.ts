import { UseMediaQueryResType } from '../../Hooks/useMediaQueryRes'
import { UserType } from '../../../@types/UserType'

export interface ChatCardPropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResType
  user: UserType
}

/**
 * @import import { ChatCardType } from './ChatCardType'
 */
export interface ChatCardType
  extends React.FunctionComponent<ChatCardPropsType> {
  (props: ChatCardPropsType): React.ReactElement
}
