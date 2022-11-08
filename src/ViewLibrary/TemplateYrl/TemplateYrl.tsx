import * as React from 'react'
import { View } from 'react-native'
import { ITemplateYrlProps } from './TemplateYrlType'
import { templateYrlStyleDefault } from './TemplateYrlStyle'

export const TemplateYrl: React.FunctionComponent<
  ITemplateYrlProps
> = props => {
  const { styleProps } = props

  const styleTemplate =
    (styleProps && styleProps.container) || templateYrlStyleDefault.container

  return <View></View>
}
