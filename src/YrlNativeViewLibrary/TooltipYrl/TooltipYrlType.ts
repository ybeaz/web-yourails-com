import { ReactElement } from 'react'

/**
 * TooltipYrlType and TooltipYrlProps Interface
 */
export interface TooltipYrlPropsType {
  backgroundColor: string
  children: string | ReactElement | undefined | null
  styleProps?: { TooltipYrl: any; iconTextWrapper: any; titleText: any }
  testID: string
  tooltipTitle: string | ReactElement | undefined | null
}

export type TooltipsPropsOutYrlType = Record<string, any>

export interface TooltipYrlType
  extends React.FunctionComponent<TooltipYrlPropsType> {
  (props: TooltipYrlPropsType): React.ReactElement
}