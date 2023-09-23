import React from 'react'
import { View } from 'react-native'

import { AnimatedYrl } from '../../../YrlNativeViewLibrary'
import {
  LayoutOfRowPropsType,
  LayoutOfRowPropsOutType,
  LayoutOfRowType,
} from './LayoutOfRowTypes'
import { style } from './LayoutOfRowStyles'

/**
 * @import import { LayoutOfRow } from '../../Frames/LayoutOfRow/LayoutOfRow'
 */
const LayoutOfRowComponent: LayoutOfRowType = props => {
  const {
    styleProps = { LayoutOfRow: {}, leftColumn: {}, mainColumn: {} },
    isLeftColumn = true,
    isMainColumn = true,
    children = null,
  } = props
  return (
    <View
      style={[style.LayoutOfRow, styleProps.LayoutOfRow]}
      testID='LayoutOfRow'
    >
      {isLeftColumn && children ? (
        <View
          style={[style.leftColumn, styleProps.leftColumn]}
          testID='leftColumn'
        >
          {children && children.length === undefined ? children : children[0]}
        </View>
      ) : null}

      {isMainColumn && children && children[1] ? (
        <View
          style={[style.mainColumn, styleProps.mainColumn]}
          testID='mainColumn'
        >
          {children[1]}
        </View>
      ) : null}
    </View>
  )
}

export const LayoutOfRow = React.memo(LayoutOfRowComponent)

export type { LayoutOfRowPropsType, LayoutOfRowPropsOutType, LayoutOfRowType }
