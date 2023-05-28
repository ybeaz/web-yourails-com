import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export type UserMenuPropsType = {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
}

export type UserMenuPropsOutType = Record<string, any>

/**
 * @import import { UserMenuType } from './UserMenuType'
 */
export interface UserMenuType
  extends React.FunctionComponent<UserMenuPropsType> {
  (props: UserMenuPropsType): React.ReactElement
}
