import { ReactElement } from 'react'
import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface HeaderPropsType {
  styleProps?: { Header: any; headerText: any }
  mediaParams?: MediaParamsDefaultType
  headerText?: string
  children: string | ReactElement
}

/**
 * @import import { HeaderType } from './HeaderType'
 */
export interface HeaderType extends React.FunctionComponent<HeaderPropsType> {
  (props: HeaderPropsType): React.ReactElement
}
