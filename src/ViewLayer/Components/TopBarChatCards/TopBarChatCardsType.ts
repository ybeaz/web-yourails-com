import { HandleEventsType } from '../../../DataLayer/index.handleEvents'
import { RootStoreType } from '../../../@types/RootStoreType'
import { AvatarPlusInfoPropsType } from '../AvatarPlusInfo/AvatarPlusInfoType'
import {
  ButtonYrlPropsType,
  ImageYrlPropsType,
  IconYrlPropsType,
  InputTextYrlPropsType,
  MediaParamsDefaultType,
  UrlParamsDefaultType,
} from '../../../YrlNativeViewLibrary'

export interface TopBarChatCardsPropsType {
  styleProps?: any
  handleEvents: HandleEventsType
  mediaParams?: MediaParamsDefaultType
  urlParams: UrlParamsDefaultType
  urlParamsSearch: any
  inputSearch: string
  store: RootStoreType
}

export type TopBarChatCardsPropsOutType = {
  avatarPlusInfoProps: AvatarPlusInfoPropsType
  imageProfileHostAvatarProps: ImageYrlPropsType
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
