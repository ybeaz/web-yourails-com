import * as React from 'react'
import { View } from 'react-native'
import { TemplateYrlType } from './TemplateYrlType'
import { TemplateYrlStyle } from './TemplateYrlStyle'

/**
 * @import import { TemplateYrlYrl } from './ViewLibrary/TemplateYrl/TemplateYrl'
 * @import import { TemplateYrlPropsType } from './ViewLibrary/TemplateYrl/TemplateYrlType'
 * @propsOut 
  templateYrlProps: {
  }
 */
export const TemplateYrl: TemplateYrlType = props => {
  const { styleProps = { TemplateYrl: {} }, testID = 'TemplateYrl' } = props

  return (
    <View
      style={[TemplateYrlStyle.TemplateYrl, styleProps.TemplateYrl]}
      testID={testID}
    ></View>
  )
}
