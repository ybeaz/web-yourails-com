import { IdUserType } from '../../../@types/UserType'
import { ProfileType } from '../../../@types/ProfileType'
import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'
import { RootStoreType } from '../../../@types/RootStoreType'

export interface ChatCardsPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  profiles: ProfileType[]
  idProfileActive: IdUserType
  urlParam1: string | undefined
  urlParam2: string | undefined
  query: any
  store: RootStoreType
}

/**
 * @import import { ChatCardsType } from './ChatCardsType'
 */
export interface ChatCardsType
  extends React.FunctionComponent<ChatCardsPropsType> {
  (props: ChatCardsPropsType): React.ReactElement
}
