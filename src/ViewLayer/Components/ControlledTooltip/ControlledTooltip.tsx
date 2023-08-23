import React from 'react'
import { Tooltip } from '@rneui/themed'
import { Dimensions } from 'react-native'

import { ControlledTooltipPropsType } from './ControlledTooltipType'
import { style } from './ControlledTooltipStyle'
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
