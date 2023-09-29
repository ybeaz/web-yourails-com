import {
  PageChatsWholeScreenPropsType,
  PageChatsWholeScreenPropsOutType,
} from '../PageChatsWholeScreen/PageChatsWholeScreen'

export type ChatCardsScreenPropsType = PageChatsWholeScreenPropsType

export type ChatCardsScreenPropsOutType = PageChatsWholeScreenPropsOutType

/**
 * @import import { ChatCardsScreenType } from './ChatCardsScreenType'
 */
export interface ChatCardsScreenComponentType
  extends React.FunctionComponent<ChatCardsScreenPropsType> {
  (props: ChatCardsScreenPropsType): React.ReactElement
}

export interface ChatCardsScreenType
  extends React.FunctionComponent<ChatCardsScreenPropsType> {
  (props: ChatCardsScreenPropsType): React.ReactElement
}
