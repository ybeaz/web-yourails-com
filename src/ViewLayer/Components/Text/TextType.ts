import { Text as TextReactNative, TextProps } from 'react-native'

export interface TextPropsType extends TextProps {
  styleProps?: any
}

/**
 * @import import { TextType } from './TextType'
 */
export interface TextType {
  (props: TextPropsType): React.ReactElement
}
