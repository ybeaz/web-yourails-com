import { UseMediaQueryResType } from '../../Hooks/useMediaQueryRes'

export interface ChatCardsPropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResType
}

/**
 * @import import { ChatCardsType } from './ChatCardsType'
 */
export interface ChatCardsType
  extends React.FunctionComponent<ChatCardsPropsType> {
  (props: ChatCardsPropsType): React.ReactElement
}
