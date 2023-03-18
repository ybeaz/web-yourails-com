import * as React from 'react'
import { View } from 'react-native'
import { TemplateYrlType } from './TemplateYrlType'
import { TemplateYrlStyle } from './TemplateYrlStyle'

/**
 * @import import { TemplateYrlYrl } from './ViewLibrary/TemplateYrl/TemplateYrl'
 * @import import { TemplateYrlPropsType } from './ViewLibrary/TemplateYrl/TemplateYrlType'
 */
export const TemplateYrl: TemplateYrlType = props => {
  const { styleProps = { TemplateYrl: {} } } = props

  return (
    <View style={[TemplateYrlStyle.TemplateYrl, styleProps.TemplateYrl]}></View>
  )
}
