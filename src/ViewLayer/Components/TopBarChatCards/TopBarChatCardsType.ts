export interface TopBarChatCardsPropsType {
  styleProps?: any
}

/**
 * @import import { TopBarChatCardsType } from './TopBarChatCardsType'
 */
export interface TopBarChatCardsType
  extends React.FunctionComponent<TopBarChatCardsPropsType> {
  (props: TopBarChatCardsPropsType): React.ReactElement
}
