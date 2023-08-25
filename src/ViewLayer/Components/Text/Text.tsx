import React from 'react'
import { Text as TextReactNative } from 'react-native'

import { TextPropsType, TextComponentType } from './TextType'
import { style as styleDefault } from './TextStyle'

/**
 * @import import { TextPropsType, TextType } from '../Components/Text/Text'
 */
const TextComponent: TextComponentType = props => {
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

export const Text: React.NamedExoticComponent<any> = React.memo(TextComponent)
export type { TextPropsType, TextComponentType }
