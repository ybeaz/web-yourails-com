export interface ChatInputPropsType {}

/**
 * @import import { ChatInputType } from './ChatInputType'
 */
export interface ChatInputType
  extends React.FunctionComponent<ChatInputPropsType> {
  (props: ChatInputPropsType): React.ReactElement
}
