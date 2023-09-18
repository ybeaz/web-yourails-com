import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface DebugHomePropsType {
  styleProps?: any
  onLayout?: any
  navigation?: any
  titleText: string
}

export type DebugHomePropsOutType = Record<string, any>

/**
 * @import import { DebugHomeType } from './DebugHomeType'
 */
export interface DebugHomeComponentType
  extends React.FunctionComponent<DebugHomePropsType> {
  (props: DebugHomePropsType): React.ReactElement
}

export type DebugHomeType = React.FunctionComponent<DebugHomePropsType>
