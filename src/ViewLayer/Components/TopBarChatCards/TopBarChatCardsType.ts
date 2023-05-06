import { ProfileType } from '../../../@types/ProfileType'
import {
  ButtonYrlPropsType,
  ImageYrlPropsType,
  IconYrlPropsType,
  InputTextYrlPropsType,
} from '../../../YrlNativeViewLibrary'

export interface TopBarChatCardsPropsType {
  styleProps?: any
  profileHost: ProfileType
  idProfileActive: string
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
