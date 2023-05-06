import { ReactElement } from 'react'
import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface LayoutScreenPropsType {
  styleProps?: any
  children: ReactElement[]
}

export type LayoutScreenPropsOutType = Record<string, any>

/**
 * @import import { LayoutScreenType } from './LayoutScreenType'
 */
export interface LayoutScreenType
  extends React.FunctionComponent<LayoutScreenPropsType> {
  (props: LayoutScreenPropsType): React.ReactElement
}
