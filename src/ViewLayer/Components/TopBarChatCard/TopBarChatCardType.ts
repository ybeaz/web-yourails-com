export interface TopBarChatCardPropsType {
  styleProps?: any
}

/**
 * @import import { TopBarChatCardType } from './TopBarChatCardType'
 */
export interface TopBarChatCardType
  extends React.FunctionComponent<TopBarChatCardPropsType> {
  (props: TopBarChatCardPropsType): React.ReactElement
}
