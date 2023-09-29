import React from 'react'
import { Text as TextReactNative } from 'react-native'

import { TextPropsType, TextComponentType } from './TextType'
import { style as styleDefault } from './TextStyle'

/**
 * @import import { TextPropsType, TextType } from '../Components/Text/Text'
 */
const TextComponent: TextComponentType = props => {
  const { onHeightChange = _ => {}, style, styleProps = { Text: {} } } = props

  const handleLayout = (event: any) => {
    const { height } = event.nativeEvent.layout
    onHeightChange(height)
  }

  return (
    <TextReactNative
      {...props}
      onLayout={(event: any) => handleLayout(event)}
      style={[styleDefault.Text, style, styleProps.Text]}
    >
      {props.children}
    </TextReactNative>
  )
}

export const Text: React.NamedExoticComponent<any> = React.memo(TextComponent)
export type { TextPropsType, TextComponentType }
