import { ReactElement } from 'react'
import { PressableProps } from 'react-native'

import { IconYrlPropsType } from '../IconYrl/IconYrlType'

/**
 * @import import { ButtonYrlPropsType } from './YrlNativeViewLibrary/ButtonYrl/ButtonYrlType'
 */
export interface ButtonYrlPropsType {
  titleText?: string | ReactElement
  styleProps?: { ButtonYrl: any; title: any }
  testID: string
  disabled?: boolean
  onPress?: PressableProps['onPress']
  iconProps?: IconYrlPropsType
  children?: string | ReactElement
}

export interface ButtonYrlType
  extends React.FunctionComponent<ButtonYrlPropsType> {
  (props: ButtonYrlPropsType): React.ReactElement
}
