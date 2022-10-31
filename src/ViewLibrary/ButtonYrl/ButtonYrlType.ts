import { PressableProps } from 'react-native'

import { IIconYrlProps } from '../IconYrl/IconYrlType'

/**
 * IButtonYrlProps Interface
 * @prop title The Button's title and optional.
 * @prop tyleProps The Button's styleProps and optional.
 * @prop backgroundColor The Button's background color and optional.
 * @prop color The Button's color and optional.
 * @prop disabled The Button's disabled and optional.
 * @prop onClick The Button's onClick function and optional.
 * @prop icon The Button's icon is a IButtonIcon and optional.
 */
export interface IButtonYrlProps {
  title?: string
  styleProps?: any
  disabled?: boolean
  onPress?: PressableProps['onPress']
  iconProps?: IIconYrlProps
}
