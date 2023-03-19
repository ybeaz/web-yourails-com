import * as React from 'react'
import { Pressable, Text } from 'react-native'
import { ButtonYrlType } from './ButtonYrlType'
import { ButtonYrlStyle } from './ButtonYrlStyle'
import { IconYrl } from '../IconYrl/IconYrl'

/**
 * @import import { ButtonYrl } from './ViewLibrary/ButtonYrl/ButtonYrl'
 * @import import { ButtonYrlPropsType } from './ViewLibrary/ButtonYrl/ButtonYrlType'
 */
export const ButtonYrl: ButtonYrlType = props => {
  const {
    title,
    styleProps = { ButtonYrl: {}, title: {} },
    testID = 'ButtonYrl',
    disabled,
    onPress,
    iconProps,
  } = props

  return (
    <Pressable
      testID='ButtonYrl'
      style={[ButtonYrlStyle.ButtonYrl, styleProps.ButtonYrl]}
      onPress={onPress}
      disabled={disabled}
    >
      {iconProps && (
        <IconYrl
          library={iconProps.library}
          name={iconProps.name}
          size={iconProps.size}
          color={iconProps.color}
          testID={`${testID}-IconYrl`}
        />
      )}

      {title && !iconProps && (
        <Text style={[ButtonYrlStyle.title, styleProps.title]}>{title}</Text>
      )}
    </Pressable>
  )
}
