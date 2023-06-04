import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface AwaitViewPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
}

export type AwaitViewPropsOutType = Record<string, any>

/**
 * @import import { AwaitViewType } from './AwaitViewType'
 */
export interface AwaitViewType
  extends React.FunctionComponent<AwaitViewPropsType> {
  (props: AwaitViewPropsType): React.ReactElement
}
