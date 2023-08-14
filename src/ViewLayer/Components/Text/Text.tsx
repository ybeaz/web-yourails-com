import React from 'react'
import { Text as TextReactNative } from 'react-native'

import { TextType } from './TextType'
import { style as styleDefault } from './TextStyle'

/**
 * @import import { Text } from '../Components/Text/Text'
 */
const TextComponent: TextType = props => {
  const { style, styleProps = { Text: {} } } = props

  return (
    <TextReactNative
      {...props}
      style={[styleDefault.Text, style, styleProps.Text, { flex: 1 }]}
    >
      {props.children}
    </TextReactNative>
  )
}

export const Text = React.memo(TextComponent)
