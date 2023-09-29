import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'
import { RootStoreType } from '../../../@types/RootStoreType'

export interface ProfilePropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  store: RootStoreType
}

/**
 * @import import { ProfileType } from './ProfileType'
 */
export interface ProfileComponentType
  extends React.FunctionComponent<ProfilePropsType> {
  (props: ProfilePropsType): React.ReactElement
}
