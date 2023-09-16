import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface StubDebugPropsType {
  styleProps?: any
  onLayout?: any
}

export type StubDebugPropsOutType = Record<string, any>

/**
 * @import import { StubDebugType } from './StubDebugType'
 */
export interface StubDebugComponentType
  extends React.FunctionComponent<StubDebugPropsType> {
  (props: StubDebugPropsType): React.ReactElement
}

export type StubDebugType = React.FunctionComponent<StubDebugPropsType>
