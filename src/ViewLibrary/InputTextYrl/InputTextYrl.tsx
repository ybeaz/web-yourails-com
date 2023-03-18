import * as React from 'react'
import { SafeAreaView, TextInput } from 'react-native'
import { InputTextYrlType } from './InputTextYrlType'
import { inputTextYrlStyleDefault } from './InputTextYrlStyle'

export const InputTextYrl: InputTextYrlType = props => {
  const {
    autofocus,
    defaultValue,
    maxlength,
    multiline,
    onChangeText,
    placeholder,
    referance,
    styleProps,
    value,
  } = props

  const styleContainer =
    (styleProps && styleProps.container) || inputTextYrlStyleDefault.container

  const styleInputText =
    (styleProps && styleProps.inputText) || inputTextYrlStyleDefault.inputText

  return (
    <SafeAreaView style={styleContainer}>
      <TextInput
        style={styleInputText}
        onChangeText={onChangeText}
        value={value}
      />
    </SafeAreaView>
  )
}