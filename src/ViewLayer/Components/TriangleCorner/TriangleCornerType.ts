export interface TriangleCornerPropsType {
  isShow?: boolean
  styleProps?: any
}

/**
 * @import import { TriangleCornerType } from './TriangleCornerType'
 */
export interface TriangleCornerType
  extends React.FunctionComponent<TriangleCornerPropsType> {
  (props: TriangleCornerPropsType): React.ReactElement
}
