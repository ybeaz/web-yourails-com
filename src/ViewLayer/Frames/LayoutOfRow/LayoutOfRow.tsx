import React from 'react'
import { View } from 'react-native'

import { AnimatedYrl } from '../../../YrlNativeViewLibrary'
import { LayoutOfRowType } from './LayoutOfRowTypes'
import { style } from './LayoutOfRowStyles'

/**
 * @import import { LayoutOfRow } from '../../Frames/LayoutOfRow/LayoutOfRow'
 */
const LayoutOfRowComponent: LayoutOfRowType = props => {
  const {
    styleProps = { LayoutOfRow: {}, leftColumn: {}, mainColumn: {} },
    isLeftColumn,
    isMainColumn,
    mainColumnOuterAnimatedYrlProps,
    children,
  } = props
  return (
    <View
      style={[style.LayoutOfRow, styleProps.LayoutOfRow]}
      testID='LayoutOfRow'
    >
      {isLeftColumn && (
        <View
          style={[style.leftColumn, styleProps.leftColumn]}
          testID='leftColumn'
        >
          {children[0]}
        </View>
      )}

      {isMainColumn && (
        <AnimatedYrl {...mainColumnOuterAnimatedYrlProps}>
          <View
            style={[style.mainColumn, styleProps.mainColumn]}
            testID='mainColumn'
          >
            {children[1]}
          </View>
        </AnimatedYrl>
      )}
    </View>
  )
}

export const LayoutOfRow = React.memo(LayoutOfRowComponent)
