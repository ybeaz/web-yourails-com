import { PressableProps } from 'react-native'

import { IconYrlPropsType } from '../IconYrl/IconYrlType'

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
export interface ButtonYrlPropsType {
  title?: string
  styleProps?: { button: any; text: any } | undefined
  disabled?: boolean
  onPress?: PressableProps['onPress']
  iconProps?: IconYrlPropsType
}

export interface ButtonYrlType
  extends React.FunctionComponent<ButtonYrlPropsType> {
  (props: ButtonYrlPropsType): React.ReactElement
}