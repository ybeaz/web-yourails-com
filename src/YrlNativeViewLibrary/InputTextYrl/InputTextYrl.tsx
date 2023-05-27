import * as React from 'react'
import { SafeAreaView, TextInput, ReturnKeyTypeOptions } from 'react-native'
import { InputTextYrlType } from './InputTextYrlType'
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

  return (
    <SafeAreaView
      style={[style.InputTextYrl, styleProps.InputTextYrl]}
      testID={testID}
    >
      <TextInput
        style={[style.inputText, styleProps.inputText]}
        testID={`${testID}_TextInput`}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        returnKeyType='send'
        autoFocus={true}
        blurOnSubmit={true}
      />
    </SafeAreaView>
  )
}
