import { ProfileType } from '../../../@types/ProfileType'
import { HandleEventsType } from '../../../DataLayer/index.handleEvents'

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
  profileHost: ProfileType
  idProfileActive: string
  handleEvents: HandleEventsType
  mediaParams?: MediaParamsDefaultType
  urlParams: UrlParamsDefaultType
  urlParamsSearch: any
  inputSearch: string
}

export type TopBarChatCardsPropsOutType = {
  buttonProfileHostAvatarProps: ButtonYrlPropsType
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
