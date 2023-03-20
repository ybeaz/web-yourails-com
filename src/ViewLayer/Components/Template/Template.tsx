import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { TemplateType } from './TemplateType'
import { TemplateStyle as style } from './TemplateStyle'

/**
 * @import import { Template } from '../Components/Template/Template'
 */
export const Template: TemplateType = props => {
  const store = useSelector((store2: RootStoreType) => store2)

  const propsOut = {}

  return (
    <View style={style.Template} testID='Template'>
      null
    </View>
  )
}
