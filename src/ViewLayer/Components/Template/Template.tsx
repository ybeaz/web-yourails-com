import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'

import { withDeviceType, mediaParamsDefault } from '../../Hooks/withDeviceType'
import { Text } from '../../Components/Text/Text'
import { TemplateType } from './TemplateTypes'
import { styles } from './TemplateStyles'

/**
 * @import import { Template } from '../Components/Template/Template'
 */
const TemplateComponent: TemplateType = props => {
  const { styleProps = { Template: {} }, mediaParams = mediaParamsDefault } =
    props
  const { deviceType, screenCase, width, height } = mediaParams
  const style = styles[deviceType]

  const propsOut = {}

  return (
    <View style={[style.Template, styleProps.Template]} testID='Template'>
      null
    </View>
  )
}

export const Template = React.memo(withDeviceType(TemplateComponent))
