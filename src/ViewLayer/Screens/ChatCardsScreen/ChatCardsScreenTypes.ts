import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface ChatCardsScreenPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  onLayout: () => void
}

export type ChatCardsScreenPropsOutType = Record<string, any>

/**
 * @import import { ChatCardsScreenType } from './ChatCardsScreenType'
 */
export interface ChatCardsScreenComponentType
  extends React.FunctionComponent<ChatCardsScreenPropsType> {
  (props: ChatCardsScreenPropsType): React.ReactElement
}

export type ChatCardsScreenType =
  React.FunctionComponent<ChatCardsScreenPropsType>
