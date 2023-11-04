import {
  ReactElement,
  FunctionComponent,
  NamedExoticComponent,
  ReactNode,
} from 'react'
import { PlatformOSYrlType, InsetsYrlType } from '../../../YrlNativeViewLibrary'

export interface LayoutScreenPropsType {
  styleProps?: {
    LayoutScreen: any
    layoutScreenHeader: any
    layoutScreenBody: any
    layoutScreenFooter: any
  }
  isActive: boolean
  children: (ReactElement | null)[]
  onLayout: () => void
  platformOS: PlatformOSYrlType
  insets: InsetsYrlType
}

export type LayoutScreenPropsOutType = any

/**
 * @import import { LayoutScreenType } from './LayoutScreenType'
 */
export interface LayoutScreenComponentType
  extends React.FunctionComponent<LayoutScreenPropsType> {
  (props: LayoutScreenPropsType): ReactElement
}

export interface LayoutScreenType {
  (props: LayoutScreenComponentType): FunctionComponent | NamedExoticComponent
}
