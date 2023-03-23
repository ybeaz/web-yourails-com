import * as React from 'react'
import { SafeAreaView, TextInput } from 'react-native'
import { InputTextYrlType } from './InputTextYrlType'
import { InputTextYrlStyle } from './InputTextYrlStyle'

/**
 * @import import { InputTextYrl } from './ViewLibrary/InputTextYrl/InputTextYrl'
 * @import import { InputTextYrlPropsType } from './ViewLibrary/InputTextYrl/InputTextYrlType'
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
    multiline,
    numberOfLines,
    onChangeText,
    placeholder,
    placeholderTextColor,
    testID = 'InputTextYrl',
    value,
  } = props

  return (
    <SafeAreaView
      style={[InputTextYrlStyle.InputTextYrl, styleProps.InputTextYrl]}
      testID={testID}
    >
      <TextInput
        style={[InputTextYrlStyle.inputText, styleProps.inputText]}
        testID={`${testID}_TextInput`}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
    </SafeAreaView>
  )
}
