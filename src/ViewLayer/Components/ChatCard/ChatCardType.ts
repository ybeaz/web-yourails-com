import { UseMediaQueryResYrlOutType } from '../../../YrlNativeViewLibrary'
import { ProfileType } from '../../../@types/ProfileType'
import { HandleEventsType } from '../../../DataLayer/index.handleEvents'

export interface ChatCardPropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResYrlOutType
  profile: ProfileType
  handleEvents: HandleEventsType
  isActive: boolean
}

/**
 * @import import { ChatCardType } from './ChatCardType'
 */
export interface ChatCardType
  extends React.FunctionComponent<ChatCardPropsType> {
  (props: ChatCardPropsType): React.ReactElement
}
