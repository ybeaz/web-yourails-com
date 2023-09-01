import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'
import { ProfileType } from '../../../@types/GraphqlTypes'
import { HandleEventsType } from '../../../DataLayer/index.handleEvents'

export interface ChatCardPropsType {
  styleProps?: any
  profile: ProfileType
  isActive: boolean
  handleEvents: HandleEventsType
  mediaParams?: MediaParamsDefaultType
  urlParam1: string | undefined
  urlParam2: string | undefined
  query: any
}

/**
 * @import import { ChatCardType } from './ChatCardType'
 */
export interface ChatCardType
  extends React.FunctionComponent<ChatCardPropsType> {
  (props: ChatCardPropsType): React.ReactElement
}
