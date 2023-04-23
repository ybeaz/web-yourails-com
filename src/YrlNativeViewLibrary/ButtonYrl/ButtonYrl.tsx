import * as React from 'react'
import { Pressable, Text } from 'react-native'
import { ButtonYrlType } from './ButtonYrlType'
import { ButtonYrlStyle as style } from './ButtonYrlStyle'
import { IconYrl } from '../IconYrl/IconYrl'

/**
 * @import import { ButtonYrl, ButtonYrlPropsType } from './YrlNativeViewLibrary'
 * @propsOut 
  buttonYrl: {
    styleProps: { ButtonYrl: {}, title: {} },
    titleText: 'test button',
    testID: 'ButtonYrl',
    disabled: false,
    onPress: () => {
      console.info('ButtonYrl []', 'click test')
    },
    iconProps: {
      library: 'Ionicons',
      name: 'arrow-back-outline',
      styleProps: { IconYrl: {} },
      size: '1.5rem',
      color: 'red',
      testID: 'ButtonYrl',
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
    children,
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
          testID={iconProps.testID || `${testID}_IconYrl`}
        />
      )}

      {titleText ? (
        <Text style={[style.title, styleProps.title]} testID={`${testID}_Text`}>
          {titleText}
        </Text>
      ) : null}
      {children}
    </Pressable>
  )
}
