import React, { ReactNode } from 'react'
import { HandleEventsType } from '../../../DataLayer/index.handleEvents'

import {
  UrlParamsDefaultType,
  MediaParamsDefaultType,
  PlatformOSYrlType,
  InsetsYrlType,
  WithPropsYrlPropsType,
  WithPropsM1YrlType,
  WithPropsYrlType,
} from '../../../YrlNativeViewLibrary'
import { LayoutScreenPropsType } from '../../Frames/LayoutScreen/LayoutScreen'
import { LayoutOfRowPropsType } from '../../Frames/LayoutOfRow/LayoutOfRow'
import { ContentMenuMainColumnPropsType } from '../../Components/ContentMenuMainColumn/ContentMenuMainColumn'
import { RootStoreType } from '../../../@types/RootStoreType'
import { SectionMappingType } from '../../../@types/SectionMappingType'

export type PageChatsWholeScreenPropsType = {
  styles?: any
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  urlParams?: UrlParamsDefaultType
  urlParamsSearch?: any
  platformOS?: PlatformOSYrlType
  insets?: InsetsYrlType
  routeProps?: any
  themeDafault?: string
  handleEvents?: HandleEventsType
  history?: History
  storeStateSlice?: {
    idProfileActive: RootStoreType['globalVars']['idProfileActive']
    isLeftColumn: RootStoreType['componentsState']['isLeftColumn']
    isMainColumn: RootStoreType['componentsState']['isMainColumn']
    isMainColumnBlank: RootStoreType['componentsState']['isMainColumnBlank']
    modalFrame: RootStoreType['componentsState']['modalFrame']
    profiles: RootStoreType['profiles']
    sectionsMapping: RootStoreType['sectionsMapping']
  }
  onLayout?: () => void
  navigation?: any
}

export type PageChatsWholeScreenPropsOutType = {
  style: any
  themes: { themeA: any; themeB: any }
  layoutScreenProps: Omit<
    LayoutScreenPropsType,
    'children' | 'platformOS' | 'insets'
  >
  layoutOfRowHeaderProps: LayoutOfRowPropsType
  layoutOfRowBodyProps: LayoutOfRowPropsType
  layoutOfRowFooterProps: LayoutOfRowPropsType
  mainColumnContentMenuProps: Omit<
    ContentMenuMainColumnPropsType,
    'sectionsMapping' | 'store' | 'handleEvents'
  >
  isShowModalFrame: boolean
  isMainColumnBlank: boolean
  sectionsMappingForProfile: SectionMappingType[]
}

export interface PageChatsWholeScreenComponentType
  extends React.FunctionComponent<PageChatsWholeScreenPropsType> {
  (props: PageChatsWholeScreenPropsType): React.ReactElement
}

export interface PageChatsWholeScreenType
  extends React.FunctionComponent<PageChatsWholeScreenPropsType> {
  (props: PageChatsWholeScreenPropsType):
    | React.FunctionComponent<any>
    | React.ReactNode
}
