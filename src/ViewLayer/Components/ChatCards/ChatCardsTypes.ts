import { idUser } from '../../../@types/UserType'
import { ProfileType } from '../../../@types/ProfileType'
import { UseMediaQueryResYrlOutType } from '../../../YrlNativeViewLibrary'

export interface ChatCardsPropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResYrlOutType
  profiles: ProfileType[]
  idUserHost: idUser
}

/**
 * @import import { ChatCardsType } from './ChatCardsType'
 */
export interface ChatCardsType
  extends React.FunctionComponent<ChatCardsPropsType> {
  (props: ChatCardsPropsType): React.ReactElement
}
