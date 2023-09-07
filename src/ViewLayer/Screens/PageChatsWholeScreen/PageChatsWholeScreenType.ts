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
  history?: History
  storeStateSlice: {
    idProfileHost: RootStoreType['globalVars']['idProfileHost']
    idProfileActive: RootStoreType['globalVars']['idProfileActive']
    isLeftColumn: RootStoreType['componentsState']['isLeftColumn']
    isMainColumn: RootStoreType['componentsState']['isMainColumn']
    isMainColumnBlank: RootStoreType['componentsState']['isMainColumnBlank']
    modalFrame: RootStoreType['componentsState']['modalFrame']
    profiles: RootStoreType['profiles']
    sectionsMapping: RootStoreType['sectionsMapping']
  }
}

export interface PageChatsWholeScreenType
  extends React.FunctionComponent<PageChatsWholeScreenPropsType> {
  (props: PageChatsWholeScreenPropsType): React.ReactElement
}
