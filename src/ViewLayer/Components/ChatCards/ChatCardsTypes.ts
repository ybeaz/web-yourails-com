import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'
import { RootStoreType } from '../../../@types/RootStoreType'
import {
  UrlParamsDefaultType,
  ModalFrameYrlPropsType,
} from '../../../YrlNativeViewLibrary'
import { HandleEventsType } from '../../../DataLayer/index.handleEvents'

export interface ChatCardsPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  urlParams?: UrlParamsDefaultType
  urlParamsSearch: any
  store: RootStoreType
  handleEvents: HandleEventsType
}

export type ChatCardsPropsOutType = {
  modalFrameYrlProps: ModalFrameYrlPropsType
}

/**
 * @import import { ChatCardsType } from './ChatCardsType'
 */
export interface ChatCardsType
  extends React.FunctionComponent<ChatCardsPropsType> {
  (props: ChatCardsPropsType): React.ReactElement
}
