import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface InputTestPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  handleEvents: any
  store: any
}

export type InputTestPropsOutType = Record<string, any>

/**
 * @import import { InputTestType } from './InputTestType'
 */
export interface InputTestType
  extends React.FunctionComponent<InputTestPropsType> {
  (props: InputTestPropsType): React.ReactElement
}
