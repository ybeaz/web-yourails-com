import { HandleEventsType } from '../../../DataLayer/index.handleEvents'

import {
  UrlParamsDefaultType,
  MediaParamsDefaultType,
} from '../../../YrlNativeViewLibrary'
import { RootStoreType } from '../../../@types/RootStoreType'

export interface PageChatsWholeScreenPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  urlParams?: UrlParamsDefaultType
  urlParamsSearch: any
  routeProps?: any
  themeDafault?: string
  handleEvents: HandleEventsType
  store: RootStoreType
  history?: History
}

export interface PageChatsWholeScreenType
  extends React.FunctionComponent<PageChatsWholeScreenPropsType> {
  (props: PageChatsWholeScreenPropsType): React.ReactElement
}
