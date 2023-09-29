import { ImageYrlPropsType } from '../index'

/**
 * @import import { IconYrlPropsType } from './YrlNativeViewLibrary/IconYrl/IconYrlPropsType'
 */
export interface IconYrlPropsType {
  isActive?: boolean
  library?: string
  name?: string
  color?: string
  size?: number | string
  styleProps?: any
  testID?: string
}

export type IconYrlPropsOutType = {
  imageYrlProps: ImageYrlPropsType
}

export interface IconYrlType extends React.FunctionComponent<IconYrlPropsType> {
  (props: IconYrlPropsType): React.ReactElement | null
}
