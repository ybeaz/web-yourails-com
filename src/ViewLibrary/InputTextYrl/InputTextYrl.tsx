import * as React from 'react'
import { SafeAreaView, TextInput } from 'react-native'
import { InputTextYrlType } from './InputTextYrlType'
import { InputTextYrlStyle } from './InputTextYrlStyle'

/**
 * @import import { InputTextYrl } from './ViewLibrary/InputTextYrl/InputTextYrl'
 * @import import { InputTextYrlPropsType } from './ViewLibrary/InputTextYrl/InputTextYrlType'
 */
export const InputTextYrl: InputTextYrlType = props => {
  const {
    autofocus,
    defaultValue,
    maxlength,
    multiline,
    numberOfLines,
    onChangeText,
    placeholder,
    placeholderTextColor,
    reference,
    styleProps = { InputTextYrl: {}, inputText: {} },
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
