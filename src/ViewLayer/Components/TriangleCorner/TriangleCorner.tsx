import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { SafeAreaView, Text } from 'react-native'

import { TriangleCornerType } from './TriangleCornerType'
import { TriangleCornerStyle as style } from './TriangleCornerStyle'

/**
 * @import import { TriangleCorner } from '../Components/TriangleCorner/TriangleCorner'
 */
const TriangleCornerComponent: TriangleCornerType = props => {
  const { styleProps = {}, isShow = true } = props

  const show = isShow ? {} : style.notShow
  return (
    <SafeAreaView
      style={[style.TriangleCorner, styleProps.borderColor, show]}
    />
  )
}

export const TriangleCorner = React.memo(TriangleCornerComponent)
