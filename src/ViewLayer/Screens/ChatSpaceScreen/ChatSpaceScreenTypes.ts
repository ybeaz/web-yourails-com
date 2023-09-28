import {
  PageChatsWholeScreenPropsType,
  PageChatsWholeScreenPropsOutType,
} from '../PageChatsWholeScreen/PageChatsWholeScreen'

export type ChatSpaceScreenPropsType = PageChatsWholeScreenPropsType

export type ChatSpaceScreenPropsOutType = PageChatsWholeScreenPropsOutType

/**
 * @import import { ChatSpaceScreenType } from './ChatSpaceScreenType'
 */
export interface ChatSpaceScreenComponentType
  extends React.FunctionComponent<ChatSpaceScreenPropsType> {
  (props: ChatSpaceScreenPropsType): React.ReactElement
}

export interface ChatSpaceScreenType
  extends React.FunctionComponent<ChatSpaceScreenPropsType> {
  (props: ChatSpaceScreenPropsType): React.ReactElement
}
