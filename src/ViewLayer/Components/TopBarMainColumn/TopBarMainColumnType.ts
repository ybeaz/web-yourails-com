import {
  MediaParamsDefaultType,
  PlatformOSYrlType,
} from '../../../YrlNativeViewLibrary'
import { RootStoreType } from '../../../@types/RootStoreType'

export interface TopBarMainColumnPropsType {
  mediaParams?: MediaParamsDefaultType
  store: RootStoreType
  platformOS: PlatformOSYrlType
}

/**
 * @import import { TopBarMainColumnType } from './TopBarMainColumnType'
 */
export interface TopBarMainColumnType
  extends React.FunctionComponent<TopBarMainColumnPropsType> {
  (props: TopBarMainColumnPropsType): React.ReactElement
}
