import { HandleEventsType } from '../../../DataLayer/index.handleEvents'

import {
  UrlParamsDefaultType,
  MediaParamsDefaultType,
} from '../../../YrlNativeViewLibrary'
import { LayoutScreenPropsType } from '../../Frames/LayoutScreen/LayoutScreen'
import { LayoutOfRowPropsType } from '../../Frames/LayoutOfRow/LayoutOfRow'
import { ContentMenuMainColumnPropsType } from '../../Components/ContentMenuMainColumn/ContentMenuMainColumn'
import { RootStoreType } from '../../../@types/RootStoreType'
import { SectionMappingType } from '../../../@types/SectionMappingType'

export type PageChatsWholeScreenPropsType = {
  styles: any
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

export type PageChatsWholeScreenPropsOutType = {
  style: any
  themes: { themeA: any; themeB: any }
  layoutScreenProps: Omit<LayoutScreenPropsType, 'children'>
  layoutOfRowNavigationTopProps: LayoutOfRowPropsType
  layoutOfRowMainContentProps: LayoutOfRowPropsType
  layoutOfRowNavigationBottomProps: LayoutOfRowPropsType
  mainColumnContentMenuProps: Omit<
    ContentMenuMainColumnPropsType,
    'sectionsMapping' | 'store' | 'handleEvents'
  >
  isShowModalFrame: boolean
  isMainColumnBlank: boolean
  sectionsMappingForProfile: SectionMappingType[]
}

export interface PageChatsWholeScreenType
  extends React.FunctionComponent<PageChatsWholeScreenPropsType> {
  (props: PageChatsWholeScreenPropsType): React.ReactElement
}
