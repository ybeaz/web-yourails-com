import * as React from 'react'
import { View } from 'react-native'
import { ITemplateYrlProps } from './TemplateYrlType'
import { templateYrlStyleDefault } from './TemplateYrlStyle'

export const TemplateYrl = (props: ITemplateYrlProps) => {
  const { styleProps } = props

  const styleTemplate =
    (styleProps && styleProps.container) || templateYrlStyleDefault.container

  return <View></View>
}
