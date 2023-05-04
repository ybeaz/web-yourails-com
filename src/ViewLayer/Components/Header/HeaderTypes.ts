import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface HeaderPropsType {
  styleProps?: { Header: any; headerText: any }
  mediaParams?: MediaParamsDefaultType
  headerText?: string
}

/**
 * @import import { HeaderType } from './HeaderType'
 */
export interface HeaderType extends React.FunctionComponent<HeaderPropsType> {
  (props: HeaderPropsType): React.ReactElement
}
