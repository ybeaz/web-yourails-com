import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { TemplateType } from './TemplateType'
import { TemplateStyle as style } from './TemplateStyle'

export const Template: TemplateType = props => {
  const store = useSelector((store2: RootStoreType) => store2)

  const propsOut = {}

  return (
    <View testID='Template' style={style.Template}>
      null
    </View>
  )
}
