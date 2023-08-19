import * as React from 'react'
import { View, TextInput, Platform } from 'react-native'
import { InputTextYrlType, InputTextPropsOutType } from './InputTextYrlType'
import { InputTextYrlStyle as style } from './InputTextYrlStyle'

/**
 * @import import { InputTextYrl, InputTextYrlPropsType } from './YrlNativeViewLibrary'
 * @link https://stackoverflow.com/questions/35764782/identify-return-key-action-in-react-native
 * @propsOut 
  inputTextYrlProps: {
    styleProps: { InputTextYrl: {}, inputText: {} },
    multiline: false,
    numberOfLines: 1,
    onChangeText: () => {},
    placeholder: '',
    placeholderTextColor: '',
    testID: 'InputTextYrl',
    value: '',
  }
 */
export const InputTextYrl: InputTextYrlType = props => {
  const {
    styleProps = { InputTextYrl: {}, inputText: {} },
    multiline = false,
    numberOfLines = 3,
    onChangeText,
    onSubmitEditing,
    placeholder,
    placeholderTextColor,
    testID = 'InputTextYrl',
    value,
  } = props

  const propsOut: InputTextPropsOutType = {
    viewProps: {
      style: [style.InputTextYrl, styleProps.InputTextYrl],
      testID,
    },
    textInputProps: {
      style: [style.inputText, styleProps.inputText],
      testID: `${testID}_TextInput`,
      multiline,
      numberOfLines,
      onChangeText,
      onSubmitEditing,
      value,
      placeholder,
      placeholderTextColor,
      returnKeyType: 'send',
      autoFocus: true,
      blurOnSubmit: true,
    },
  }

  propsOut.textInputPropsResize = {
    ...propsOut.textInputProps,
    style: [style.inputText, style.textInputTextResize, styleProps.inputText],
  }

  const textInputProps =
    Platform.OS === 'web'
      ? propsOut.textInputPropsResize
      : propsOut.textInputProps

  return (
    <View {...propsOut.viewProps}>
      <TextInput {...textInputProps} />
    </View>
  )
}
