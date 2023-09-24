import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface DebugStubPropsType {
  styleProps?: any
  onLayout?: any
  captureText: string
}

export type DebugStubPropsOutType = Record<string, any>

/**
 * @import import { DebugStubType } from './DebugStubType'
 */
export interface DebugStubComponentType
  extends React.FunctionComponent<DebugStubPropsType> {
  (props: DebugStubPropsType): React.ReactElement
}

export type DebugStubType = React.FunctionComponent<DebugStubPropsType>
