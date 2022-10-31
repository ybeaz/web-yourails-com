import * as React from 'react'
import { SafeAreaView, TextInput } from 'react-native'
import { IInputTextYrlProps } from './InputTextYrlType'
import { inputTextYrlStyleDefault } from './InputTextYrlStyle'

export const InputTextYrl = (props: IInputTextYrlProps) => {
  const { onChangeText, value, styleProps } = props

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
