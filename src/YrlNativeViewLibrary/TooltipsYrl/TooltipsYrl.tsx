import React from 'react'
import { View, Modal } from 'react-native'
import { Tooltip, Text as TextRrneui } from '@rneui/themed'
import { IconYrl, TooltipPopoverYrl } from '../'
import {
  TooltipsYrlPropsType,
  TooltipsPropsOutYrlType,
  TooltipsYrlType,
} from './TooltipsYrlType'
import { TooltipsYrlStyle as style } from './TooltipsYrlStyle'

import { ControlledTooltip } from '../../ViewLayer/Components/ControlledTooltip/ControlledTooltip'

/**
 * @import import { TooltipsYrl, TooltipsYrlPropsType } from './YrlNativeViewLibrary'
 * @propsOut
  TooltipsYrlProps: {
    backgroundColor: 'string',
    children: 'string | ReactElement',
    styleProps: { TooltipsYrl: {}, iconTextWrapper:{}, titleText: {} },
    testID: 'tooltipsYrl',
    tooltipTitle: 'string | ReactElement',
  }
 */
export const TooltipsYrl: TooltipsYrlType = props => {
  const {
    backgroundColor,
    styleProps = { TooltipsYrl: {}, iconTextWrapper: {}, titleText: {} },
    tooltipTitle,
    children,
    testID = 'TooltipsYrl',
  } = props

  const [open, setOpen] = React.useState(false)

  const propsOut: TooltipsPropsOutYrlType = {
    tooltipProps: {
      ModalComponent: Modal,
      backgroundColor,
      containerStyle: styleProps.TooltipsYrl,
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

export type { TooltipsYrlPropsType, TooltipsPropsOutYrlType, TooltipsYrlType }
