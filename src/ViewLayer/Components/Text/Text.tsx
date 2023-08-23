import React from 'react'
import { Text as TextReactNative } from 'react-native'

import { TextPropsType, TextType } from './TextType'
import { style as styleDefault } from './TextStyle'

/**
 * @import import { TextPropsType, TextType } from '../Components/Text/Text'
 */
const TextComponent: TextType = props => {
  const { style, styleProps = { Text: {} } } = props

  return (
    <TextReactNative
      {...props}
      style={[styleDefault.Text, style, styleProps.Text]}
    >
      {props.children}
    </TextReactNative>
  )
}

export const Text = React.memo(TextComponent)
export type { TextPropsType, TextType }
