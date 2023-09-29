import {
  MediaParamsDefaultType,
  UrlParamsDefaultType,
  PlatformOSYrlType,
} from '../../../YrlNativeViewLibrary'
import { HandleEventsType } from '../../../DataLayer/index.handleEvents'
import { RootStoreType } from '../../../@types/RootStoreType'

export type UserMenuPropsType = {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  handleEvents: HandleEventsType
  urlParams: UrlParamsDefaultType
  urlParamsSearch: any
  platformOS: PlatformOSYrlType
  store: RootStoreType
}

export type UserMenuPropsOutType = Record<string, any>

/**
 * @import import { UserMenuType } from './UserMenuType'
 */
export interface UserMenuType
  extends React.FunctionComponent<UserMenuPropsType> {
  (props: UserMenuPropsType): React.ReactElement
}
