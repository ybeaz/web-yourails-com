import { HandleEventsType } from '../../../DataLayer/index.handleEvents'

import {
  UrlParamsDefaultType,
  MediaParamsDefaultType,
} from '../../../YrlNativeViewLibrary'
import { RootStoreType } from '../../../@types/RootStoreType'

export type WidgetsScreensPropsType = {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  urlParams?: UrlParamsDefaultType
  urlParamsSearch: any
  routeProps?: any
  themeDafault?: string
  handleEvents: HandleEventsType
  history?: History
  storeStateSlice: {
    idProfileActive: RootStoreType['globalVars']['idProfileActive']
    isLeftColumn: RootStoreType['componentsState']['isLeftColumn']
    isMainColumn: RootStoreType['componentsState']['isMainColumn']
    isMainColumnBlank: RootStoreType['componentsState']['isMainColumnBlank']
    modalFrame: RootStoreType['componentsState']['modalFrame']
    profiles: RootStoreType['profiles']
    sectionsMapping: RootStoreType['sectionsMapping']
  }
}

export type WidgetsScreensPropsOutType = Record<string, any>

/**
 * @import import { WidgetsScreensType } from './WidgetsScreensType'
 */
export interface WidgetsScreensComponentType
  extends React.FunctionComponent<WidgetsScreensPropsType> {
  (props: WidgetsScreensPropsType): React.ReactElement
}

export type WidgetsScreensType =
  React.FunctionComponent<WidgetsScreensPropsType>
