import React, { useState } from 'react'
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
    maxHeight = 48,
    testID = 'InputTextYrl',
    value,
  } = props

  const [heightLimit, setHeightLimit] = useState({ maxHeight: 48 })

  const handleLayout = (event: any) => {
    if (!onHeightChange) return
    const { height } = event.nativeEvent.layout
    onHeightChange(height)
    if (height <= maxHeight) setHeightLimit({ maxHeight: height })
    else setHeightLimit({ maxHeight })
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
      ...heightLimit,
    },
  }

  const textInputProps =
    Platform.OS === 'web'
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
