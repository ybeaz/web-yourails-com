import * as React from 'react'
import { View } from 'react-native'
import { TemplateYrlType } from './TemplateYrlType'
import { TemplateYrlStyle as style } from './TemplateYrlStyle'

/**
 * @import import { TemplateYrlYrl } from './YrlNativeViewLibrary/TemplateYrl/TemplateYrl'
 * @import import { TemplateYrlPropsType } from './YrlNativeViewLibrary/TemplateYrl/TemplateYrlType'
 * @propsOut 
  templateYrlProps: {
  }
 */
export const TemplateYrl: TemplateYrlType = props => {
  const { styleProps = { TemplateYrl: {} }, testID = 'TemplateYrl' } = props

  return (
    <View
      style={[style.TemplateYrl, styleProps.TemplateYrl]}
      testID={testID}
    ></View>
  )
}