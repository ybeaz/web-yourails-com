import { ReactElement } from 'react'
import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface LayoutScreenPropsType {
  styleProps?: any
  isActive: boolean
  children: (ReactElement | null)[]
  onLayout: () => void
}

export type LayoutScreenPropsOutType = any

/**
 * @import import { LayoutScreenType } from './LayoutScreenType'
 */
export interface LayoutScreenType
  extends React.FunctionComponent<LayoutScreenPropsType> {
  (props: LayoutScreenPropsType): React.ReactElement
}
