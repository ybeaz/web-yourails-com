import {
  ButtonYrlPropsType,
  MediaParamsDefaultType,
} from '../../../YrlNativeViewLibrary'

export interface CopyThisPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
}

export type CopyThisPropsOutType = {
  buttonCopyProps: ButtonYrlPropsType
}

/**
 * @import import { CopyThisType } from './CopyThisType'
 */
export interface CopyThisComponentType
  extends React.FunctionComponent<CopyThisPropsType> {
  (props: CopyThisPropsType): React.ReactElement
}

export type CopyThisType = React.NamedExoticComponent<any>
