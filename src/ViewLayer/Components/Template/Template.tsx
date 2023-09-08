import React from 'react'
import { View } from 'react-native'

import {
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { Text } from '../../Components/Text/Text'
import { themes } from '../../Styles/themes'
import {
  TemplatePropsType,
  TemplatePropsOutType,
  TemplateComponentType,
  TemplateType,
} from './TemplateTypes'
import { styles } from './TemplateStyles'

/**
 * @description Component to render
 * @import import { Template, TemplatePropsType, TemplatePropsOutType, TemplateType } 
             from '../Components/Template/Template'
 */
const TemplateComponent: TemplateComponentType = props => {
  const { styleProps = { Template: {} }, mediaParams = mediaParamsDefault } =
    props
  const { deviceType, screenCase, width, height } = mediaParams
  const style = styles[deviceType]

  const propsOut: TemplatePropsOutType = {}

  return (
    <View style={[style.Template, styleProps.Template]} testID='Template'>
      null
    </View>
  )
}

export const Template: TemplateType = withParamsMediaYrl(
  React.memo(TemplateComponent)
)

export type {
  TemplatePropsType,
  TemplatePropsOutType,
  TemplateComponentType,
  TemplateType,
}
