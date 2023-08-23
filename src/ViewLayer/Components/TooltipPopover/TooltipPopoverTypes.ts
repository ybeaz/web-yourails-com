import { ReactElement } from 'react'
import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface TooltipPopoverPropsType {
  children: string | ReactElement
  mediaParams?: MediaParamsDefaultType
  styleProps?: any
  testID: string
}

export type TooltipPopoverPropsOutType = Record<string, any>

/**
 * @import import { TooltipPopoverType } from './TooltipPopoverType'
 */
export interface TooltipPopoverType
  extends React.FunctionComponent<TooltipPopoverPropsType> {
  (props: TooltipPopoverPropsType): React.ReactElement
}
