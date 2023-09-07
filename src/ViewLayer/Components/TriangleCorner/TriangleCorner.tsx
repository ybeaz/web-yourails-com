import React from 'react'
import { View } from 'react-native'

import {
  TriangleCornerPropsType,
  TriangleCornerType,
} from './TriangleCornerType'
import { style } from './TriangleCornerStyle'

/**
 * @import import { TriangleCornerPropsType, TriangleCorner } from '../Components/TriangleCorner/TriangleCorner'
 */
const TriangleCornerComponent: TriangleCornerType = props => {
  const { styleProps = {}, isShow = true } = props

  const show = isShow ? {} : style.notShow
  return <View style={[style.TriangleCorner, styleProps.borderColor, show]} />
}

export const TriangleCorner = React.memo(TriangleCornerComponent)

export type { TriangleCornerPropsType }
