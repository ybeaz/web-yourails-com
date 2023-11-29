import { HandleEventsType } from '../../../DataLayer/index.handleEvents'
import { RootStoreType } from '../../../@types/RootStoreType'
import { AvatarPlusInfoPropsType } from '../AvatarPlusInfo/AvatarPlusInfoType'
import {
  ButtonYrlPropsType,
  ImageYrlPropsType,
  IconYrlPropsType,
  InputTextYrlPropsType,
  UrlParamsDefaultType,
} from '../../../YrlNativeViewLibrary'

export interface TopBarChatCardsPropsType {
  styleProps?: any
  handleEvents: HandleEventsType
  urlParams: UrlParamsDefaultType
  inputSearch: string
  store: RootStoreType
}

export type TopBarChatCardsPropsOutType = {
  avatarPlusInfoProps: AvatarPlusInfoPropsType
  buttonHamburgerProps: ButtonYrlPropsType
  iconHamburgerProps: IconYrlPropsType
  inputTextYrlProps: InputTextYrlPropsType
  searchIconYrlProps: IconYrlPropsType
}

/**
 * @import import { TopBarChatCardsType } from './TopBarChatCardsType'
 */
export interface TopBarChatCardsType
  extends React.FunctionComponent<TopBarChatCardsPropsType> {
  (props: TopBarChatCardsPropsType): React.ReactElement
}
