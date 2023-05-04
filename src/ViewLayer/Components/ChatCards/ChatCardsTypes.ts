import { IdUserType } from '../../../@types/UserType'
import { ProfileType } from '../../../@types/ProfileType'
import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface ChatCardsPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  profiles: ProfileType[]
  idUserHost: IdUserType
  urlParam1: string | undefined
  urlParam2: string | undefined
  query: any
}

/**
 * @import import { ChatCardsType } from './ChatCardsType'
 */
export interface ChatCardsType
  extends React.FunctionComponent<ChatCardsPropsType> {
  (props: ChatCardsPropsType): React.ReactElement
}
