import { HandleEventsType } from '../../../DataLayer/index.handleEvents'
import { RootStoreType } from '../../../@types/RootStoreType'

export interface ChatInputPropsType {
  handleEvents: HandleEventsType
  idProfileActive: string
  inputChat: Record<string, string>
  store: RootStoreType
}

/**
 * @import import { ChatInputType } from './ChatInputType'
 */
export interface ChatInputType
  extends React.FunctionComponent<ChatInputPropsType> {
  (props: ChatInputPropsType): React.ReactElement
}
