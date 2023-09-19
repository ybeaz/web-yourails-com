import * as React from 'react'
import { View, TextInput, Platform } from 'react-native'
import { InputTextYrlType, InputTextPropsOutType } from './InputTextYrlType'
import { InputTextYrlStyle as style } from './InputTextYrlStyle'
import Draggable from 'react-native-draggable'

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
    styleProps = { InputTextYrl: {}, inputText: {}, inputTextResize: {} },
    multiline = false,
    numberOfLines = 3,
    onChangeText,
    onSubmitEditing,
    onHeightChange,
    placeholder,
    placeholderTextColor,
    testID = 'InputTextYrl',
    value,
  } = props

  const handleLayout = (event: any) => {
    if (!onHeightChange) return
    const { height } = event.nativeEvent.layout
    onHeightChange(height)
  }

  const propsOut: InputTextPropsOutType = {
    inputTextYrlProps: {
      style: [style.InputTextYrl, styleProps.InputTextYrl],
      onLayout: (event: any) => handleLayout(event),
      testID,
    },
    textInputProps: {
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
    style: {
      ...style.inputText,
      ...style.inputTextResize,
      ...styleProps.inputText,
      ...styleProps.inputTextResize,
      // @ts-expect-error
      outlineStyle: 'none',
    },
  }

  const textInputProps =
    Platform.OS === 'web' || Platform.OS === 'windows'
      ? propsOut.textInputPropsResize
      : propsOut.textInputProps

  return (
    // <Draggable x={20} renderSize={100}>
    <View {...propsOut.inputTextYrlProps}>
      <TextInput {...textInputProps} />
    </View>
    // </Draggable>
  )
}
