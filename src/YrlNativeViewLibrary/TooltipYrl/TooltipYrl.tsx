import React from 'react'
import { View, Modal } from 'react-native'
import { Tooltip, Text as TextRrneui } from '@rneui/themed'
import { IconYrl, TooltipPopoverYrl } from '../'
import {
  TooltipYrlPropsType,
  TooltipsPropsOutYrlType,
  TooltipYrlType,
} from './TooltipYrlType'
import { TooltipYrlStyle as style } from './TooltipYrlStyle'

import { ControlledTooltip } from '../../ViewLayer/Components/ControlledTooltip/ControlledTooltip'

/**
 * @import import { TooltipYrl, TooltipYrlPropsType } from './YrlNativeViewLibrary'
 * @link https://reactnativeelements.com/docs/components/tooltip
 * @propsOut
  TooltipYrlProps: {
    backgroundColor: 'string',
    children: 'string | ReactElement',
    styleProps: { TooltipYrl: {}, iconTextWrapper:{}, titleText: {} },
    testID: 'TooltipYrl',
    tooltipTitle: 'string | ReactElement',
  }
 */
export const TooltipYrl: TooltipYrlType = props => {
  const {
    backgroundColor,
    styleProps = { TooltipYrl: {}, iconTextWrapper: {}, titleText: {} },
    tooltipTitle,
    children,
    testID = 'TooltipYrl',
  } = props

  const [open, setOpen] = React.useState(false)

  const propsOut: TooltipsPropsOutYrlType = {
    tooltipProps: {
      ModalComponent: Modal,
      backgroundColor,
      containerStyle: styleProps.TooltipYrl,
      withOverlay: true,
      withPointer: true,
      testID,
    },
    tooltipPopoverProps: {
      children,
      testID: `tooltip_chatInput`,
    },
  }

  return (
    <Tooltip
      {...propsOut.tooltipProps}
      visible={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      popover={<TooltipPopoverYrl {...propsOut.tooltipPopoverProps} />}
    >
      <View
        style={[style.iconTextWrapper, styleProps.iconTextWrapper]}
        testID='promptExamplesWrapper'
      >
        {tooltipTitle}
      </View>
    </Tooltip>
  )
}

export type { TooltipYrlPropsType, TooltipsPropsOutYrlType, TooltipYrlType }
