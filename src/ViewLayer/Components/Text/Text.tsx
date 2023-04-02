import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { Text as TextReactNative } from 'react-native'

import { TextType } from './TextType'
import { TextStyle as styleDefault } from './TextStyle'

/**
 * @import import { Text } from '../Components/Text/Text'
 */
const TextComponent: TextType = props => {
  const { style, styleProps = { Text: {} } } = props

  return (
    <TextReactNative
      {...props}
      style={[style, styleDefault.Text, styleProps.Text]}
    >
      {props.children}
    </TextReactNative>
  )
}

export const Text = React.memo(TextComponent)
