import * as React from 'react'
import { Pressable, Text } from 'react-native'
import { ButtonYrlType } from './ButtonYrlType'
import { ButtonYrlStyle as style } from './ButtonYrlStyle'
import { IconYrl } from '../IconYrl/IconYrl'

/**
 * @import import { ButtonYrl } from './ViewLibrary/ButtonYrl/ButtonYrl'
 * @import import { ButtonYrlPropsType } from './ViewLibrary/ButtonYrl/ButtonYrlType'
 * @propsOut 
  buttonYrl: {
    styleProps: { ButtonYrl: {}, title: {} },
    titleText: '',
    testID: 'ButtonYrl',
    disabled: false,
    onPress: () => {},
    iconProps: {
      // || false
      library: '',
      name: '',
      styleProps: {IconYrl: {},},
      size: 10,
      color: 'red',
      testID: '',
    },
  }
 * @link https://oblador.github.io/react-native-vector-icons/
 */
export const ButtonYrl: ButtonYrlType = props => {
  const {
    titleText,
    styleProps = { ButtonYrl: {}, title: {} },
    testID = 'ButtonYrl',
    disabled,
    onPress,
    iconProps,
  } = props

  return (
    <Pressable
      testID={testID}
      style={[style.ButtonYrl, styleProps.ButtonYrl]}
      onPress={onPress}
      disabled={disabled}
    >
      {iconProps && (
        <IconYrl
          library={iconProps.library}
          name={iconProps.name}
          styleProps={iconProps.styleProps}
          size={iconProps.size}
          color={iconProps.color}
          testID={`${testID}_IconYrl`}
        />
      )}

      {titleText && (
        <Text style={[style.title, styleProps.title]} testID={`${testID}_Text`}>
          {titleText}
        </Text>
      )}
    </Pressable>
  )
}
