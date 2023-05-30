import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'
import { HandleEventsType } from '../../../DataLayer/index.handleEvents'

export type UserMenuPropsType = {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  handleEvents: HandleEventsType
}

export type UserMenuPropsOutType = Record<string, any>

/**
 * @import import { UserMenuType } from './UserMenuType'
 */
export interface UserMenuType
  extends React.FunctionComponent<UserMenuPropsType> {
  (props: UserMenuPropsType): React.ReactElement
}
