/**
 * @import import { IconYrlPropsType } from './YrlNativeViewLibrary/IconYrl/IconYrlPropsType'
 */
export interface IconYrlPropsType {
  library?: string
  name?: string
  color?: string
  size?: number
  styleProps?: any
  testID?: string
}

export interface IconYrlType extends React.FunctionComponent<IconYrlPropsType> {
  (props: IconYrlPropsType): React.ReactElement
}
