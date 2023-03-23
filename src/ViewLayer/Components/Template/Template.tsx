import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text } from 'react-native'

import { TemplateType } from './TemplateType'
import { TemplateStyle as style } from './TemplateStyle'

/**
 * @import import { Template } from '../Components/Template/Template'
 */
const TemplateComponent: TemplateType = props => {
  const { styleProps = { Template: {} } } = props

  const propsOut = {}

  return (
    <View style={[style.Template, styleProps.Template]} testID='Template'>
      null
    </View>
  )
}

export const Template = React.memo(TemplateComponent)
