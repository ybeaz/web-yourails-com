import { ReactElement } from 'react'

/**
 * TooltipsYrlType and TooltipsYrlProps Interface
 */
export interface TooltipsYrlPropsType {
  backgroundColor: string
  children: string | ReactElement
  styleProps?: { TooltipsYrl: any; iconTextWrapper: any; titleText: any }
  testID: string
  tooltipTitle: string | ReactElement
}

export type TooltipsPropsOutYrlType = Record<string, any>

export interface TooltipsYrlType
  extends React.FunctionComponent<TooltipsYrlPropsType> {
  (props: TooltipsYrlPropsType): React.ReactElement
}
