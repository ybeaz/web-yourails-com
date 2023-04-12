import React from 'react'
import { View } from 'react-native'

import {
  withDeviceTypeYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
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

  const propsOut: Record<string, any> = {}

  return (
    <View style={[style.Template, styleProps.Template]} testID='Template'>
      null
    </View>
  )
}

export const Template = React.memo(withDeviceTypeYrl(TemplateComponent))
