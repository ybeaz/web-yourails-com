import { UseMediaQueryResType } from '../../Hooks/useMediaQueryRes'
import { RootStoreType } from '../../../@types/RootStoreType'

export interface ProfilePropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResType
  store: RootStoreType
}

/**
 * @import import { ProfileType } from './ProfileType'
 */
export interface ProfileComponentType
  extends React.FunctionComponent<ProfilePropsType> {
  (props: ProfilePropsType): React.ReactElement
}
