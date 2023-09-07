import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'
import { RootStoreType } from '../../../@types/RootStoreType'

export interface InputTestPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  handleEvents: any
  storeStateSlice: {
    inputSearch: RootStoreType['forms']['inputSearch']
  }
}

export type InputTestPropsOutType = Record<string, any>

/**
 * @import import { InputTestType } from './InputTestType'
 */
export interface InputTestType
  extends React.FunctionComponent<InputTestPropsType> {
  (props: InputTestPropsType): React.ReactElement
}
