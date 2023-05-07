import { ReactElement } from 'react'

export interface LayoutOfRowPropsType {
  styleProps?: { LayoutOfRow: any; leftColumn: any; mainColumn: any }
  isLeftColumn: boolean
  isMainColumn: boolean
  mainColumnOuterAnimatedYrlProps: any
  children: ReactElement[]
}

export type LayoutOfRowPropsOutType = Record<string, any>

/**
 * @import import { LayoutOfRowType } from './LayoutOfRowType'
 */
export interface LayoutOfRowType
  extends React.FunctionComponent<LayoutOfRowPropsType> {
  (props: LayoutOfRowPropsType): React.ReactElement
}
