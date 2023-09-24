import { PageChatsWholeScreenPropsType } from '../PageChatsWholeScreen/PageChatsWholeScreen'

export type ChatCardsScreenPropsType = PageChatsWholeScreenPropsType

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
