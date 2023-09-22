import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface ChatSpaceScreenPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  onLayout?: () => void
}

export type ChatSpaceScreenPropsOutType = Record<string, any>

/**
 * @import import { ChatSpaceScreenType } from './ChatSpaceScreenType'
 */
export interface ChatSpaceScreenComponentType
  extends React.FunctionComponent<ChatSpaceScreenPropsType> {
  (props: ChatSpaceScreenPropsType): React.ReactElement
}

export type ChatSpaceScreenType =
  React.FunctionComponent<ChatSpaceScreenPropsType>
