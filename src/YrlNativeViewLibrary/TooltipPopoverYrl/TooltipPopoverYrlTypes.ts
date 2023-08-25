import { ReactElement } from 'react'
import { MediaParamsDefaultType } from '../'

export interface TooltipPopoverYrlPropsType {
  children: string | ReactElement
  mediaParams?: MediaParamsDefaultType
  styleProps?: any
  testID: string
}

export type TooltipPopoverYrlPropsOutType = Record<string, any>

/**
 * @import import { TooltipPopoverYrlType } from './TooltipPopoverYrlType'
 */
export interface TooltipPopoverYrlType
  extends React.FunctionComponent<TooltipPopoverYrlPropsType> {
  (props: TooltipPopoverYrlPropsType): React.ReactElement
}
