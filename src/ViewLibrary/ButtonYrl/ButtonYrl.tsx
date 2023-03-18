import * as React from 'react'
import { Pressable, Text } from 'react-native'
import { ButtonYrlType } from './ButtonYrlType'
import { buttonYrlStyleDefault } from './ButtonYrlStyle'
import { IconYrl } from '../IconYrl/IconYrl'

export const ButtonYrl: ButtonYrlType = props => {
  const { title, styleProps, disabled, onPress, iconProps } = props
  const styleButton =
    (styleProps && styleProps.button) || buttonYrlStyleDefault.button

  return (
    <Pressable style={styleButton} onPress={onPress} disabled={disabled}>
      {iconProps && (
        <IconYrl
          library={iconProps.library}
          name={iconProps.name}
          size={iconProps.size}
          color={iconProps.color}
        />
      )}

      {title && !iconProps && (
        <Text style={buttonYrlStyleDefault.text}>{title}</Text>
      )}
    </Pressable>
  )
}