export interface ChatInputPropsType {
  onChangeInput: (
    event: any,
    data: { idProfileActive: string; text: string }
  ) => void
  idProfileActive: string
  inputChat: Record<string, string>
}

/**
 * @import import { ChatInputType } from './ChatInputType'
 */
export interface ChatInputType
  extends React.FunctionComponent<ChatInputPropsType> {
  (props: ChatInputPropsType): React.ReactElement
}
