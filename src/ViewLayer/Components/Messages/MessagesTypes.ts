import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'
import { RootStoreType } from '../../../@types/RootStoreType'

export interface MessagesPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  profiles: RootStoreType['profiles']
  messages: RootStoreType['messages']
}

export type MessagesPropsOutType = Record<string, any>

/**
 * @import import { MessagesType } from './MessagesType'
 */
export interface MessagesComponentType
  extends React.FunctionComponent<MessagesPropsType> {
  (props: MessagesPropsType): React.ReactElement
}

export type MessagesType = React.FunctionComponent<MessagesPropsType>
