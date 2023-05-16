import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'
import { RootStoreType } from '../../../@types/RootStoreType'
import { UrlParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface ChatCardsPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  urlParams?: UrlParamsDefaultType
  urlParamsSearch: any
  store: RootStoreType
}

/**
 * @import import { ChatCardsType } from './ChatCardsType'
 */
export interface ChatCardsType
  extends React.FunctionComponent<ChatCardsPropsType> {
  (props: ChatCardsPropsType): React.ReactElement
}
