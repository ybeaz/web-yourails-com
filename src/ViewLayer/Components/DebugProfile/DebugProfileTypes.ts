import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface DebugProfilePropsType {
  styleProps?: any
  onLayout?: any
  navigation?: any
  titleText: string
}

export type DebugProfilePropsOutType = Record<string, any>

/**
 * @import import { DebugProfileType } from './DebugProfileType'
 */
export interface DebugProfileComponentType
  extends React.FunctionComponent<DebugProfilePropsType> {
  (props: DebugProfilePropsType): React.ReactElement
}

export type DebugProfileType = React.FunctionComponent<DebugProfilePropsType>
