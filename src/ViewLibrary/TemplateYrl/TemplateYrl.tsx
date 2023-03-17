import * as React from 'react'
import { View } from 'react-native'
import { TemplateYrlType } from './TemplateYrlType'
import { templateYrlStyleDefault } from './TemplateYrlStyle'

export const TemplateYrl: TemplateYrlType = props => {
  const { styleProps } = props

  const styleTemplate =
    (styleProps && styleProps.container) || templateYrlStyleDefault.container

  return <View></View>
}
