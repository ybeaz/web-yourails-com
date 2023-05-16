import {
  MediaParamsDefaultType,
  UrlParamsDefaultType,
} from '../../../YrlNativeViewLibrary'
import { RootStoreType } from '../../../@types/RootStoreType'

export interface TopBarMainColumnPropsType {
  mediaParams?: MediaParamsDefaultType
  urlParams?: UrlParamsDefaultType
  store: RootStoreType
}

/**
 * @import import { TopBarMainColumnType } from './TopBarMainColumnType'
 */
export interface TopBarMainColumnType
  extends React.FunctionComponent<TopBarMainColumnPropsType> {
  (props: TopBarMainColumnPropsType): React.ReactElement
}
