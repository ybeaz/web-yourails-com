import React from 'react'
import { View } from 'react-native'
import { TemplateYrlType, TemplatePropsOutYrlType } from './TemplateYrlType'
import { TemplateYrlStyle as style } from './TemplateYrlStyle'

/**
 * @import import { TemplateYrlYrl, TemplateYrlPropsType } from './YrlNativeViewLibrary'
 * @propsOut
  templateYrlProps: {
  }
 */
export const TemplateYrl: TemplateYrlType = props => {
  const { styleProps = { TemplateYrl: {} }, testID = 'TemplateYrl' } = props

  const propsOut: TemplatePropsOutYrlType = {}

  return (
    <View
      style={[style.TemplateYrl, styleProps.TemplateYrl]}
      testID={testID}
    ></View>
  )
}
