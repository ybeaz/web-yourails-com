import React, { useState, useEffect, useRef, PropsWithChildren } from 'react'
import { Tooltip, TooltipProps, Text, lightColors } from '@rneui/themed'
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native'

import {
  ControlledTooltipType,
  ControlledTooltipPropsType,
} from './ControlledTooltipType'
import { ControlledTooltipStyle as style } from './ControlledTooltipStyle'

const { height } = Dimensions.get('window')

/**
 * @import import { ControlledTooltip } from '../Components/ControlledTooltip/ControlledTooltip'
 * @link Tooltip props: https://reactnativeelements.com/docs/components/tooltip
 */
export const ControlledTooltip: React.FC<
  ControlledTooltipPropsType
> = props => {
  const [open, setOpen] = React.useState(false)
  return (
    <Tooltip
      visible={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      {...props}
    />
  )
}

// /**
//  * @import import { ControlledTooltip } from '../Components/ControlledTooltip/ControlledTooltip'
//  */
// const ControlledTooltipComponent: ControlledTooltipType = props => {
//   const { styleProps = { ControlledTooltip: {} } } = props

//   const propsOut = {}

//   return (
//     <View style={[style.ControlledTooltip, styleProps.ControlledTooltip]} testID='ControlledTooltip'>
//       null
//     </View>
//   )
// }

// export const ControlledTooltip = React.memo(ControlledTooltipComponent)
