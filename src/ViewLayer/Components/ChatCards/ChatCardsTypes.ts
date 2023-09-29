import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'
import { RootStoreType } from '../../../@types/RootStoreType'
import {
  UrlParamsDefaultType,
  ModalFrameYrlPropsType,
} from '../../../YrlNativeViewLibrary'
import { HandleEventsType } from '../../../DataLayer/index.handleEvents'
import { UserMenuPropsType } from '../UserMenu/UserMenuTypes'

export interface ChatCardsPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  urlParams?: UrlParamsDefaultType
  urlParamsSearch: any
  handleEvents: HandleEventsType
  storeStateSlice: {
    isUserMenu: RootStoreType['componentsState']['isUserMenu']
    isProfileSelectMenu: RootStoreType['componentsState']['isProfileSelectMenu']
    idUserHost: RootStoreType['globalVars']['idUserHost']
    idProfileHost: RootStoreType['globalVars']['idProfileHost']
    idProfileActive: RootStoreType['globalVars']['idProfileActive']
    inputSearch: RootStoreType['forms']['inputSearch']
    profiles: RootStoreType['profiles']
  }
}

/**
 * @import import { ChatCardsType } from './ChatCardsType'
 */
export interface ChatCardsType
  extends React.FunctionComponent<ChatCardsPropsType> {
  (props: ChatCardsPropsType): React.ReactElement
}
