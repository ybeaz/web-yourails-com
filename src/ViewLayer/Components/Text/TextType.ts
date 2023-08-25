import { ReactElement } from 'react'
import { TextProps } from 'react-native'

export interface TextPropsType extends TextProps {
  styleProps?: any
  children?: string | ReactElement
  testID: string
}

/**
 * @import import { TextType } from './TextType'
 */
export interface TextComponentType {
  (props: TextPropsType): React.ReactElement
}
