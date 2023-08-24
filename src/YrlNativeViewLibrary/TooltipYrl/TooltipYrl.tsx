import React, { useState } from 'react'
import { View, Modal } from 'react-native'
import { Tooltip, Text as TextRrneui } from '@rneui/themed'
import { TooltipPopoverYrl } from '../'
import {
  TooltipYrlPropsType,
  TooltipsPropsOutYrlType,
  TooltipYrlType,
} from './TooltipYrlType'
import { TooltipYrlStyle as style } from './TooltipYrlStyle'

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
    styleProps = {
      TooltipYrl: {},
      iconTextWrapper: {},
      titleText: {},
      containerStyle: {},
      TooltipPopoverYrl: {},
    },
    titleText,
    children,
    testID = 'TooltipYrl',
    setIsVisibleProp,
    isVisibleProp = false,
  } = props

  const [isVisible, setIsVisible] = useState(false)

  let isVisibleUsed = isVisible
  let setIsVisibleUsed = setIsVisible
  if (setIsVisibleProp && isVisibleProp !== undefined) {
    isVisibleUsed = isVisibleProp
    setIsVisibleUsed = setIsVisibleProp
  }

  const propsOut: TooltipsPropsOutYrlType = {
    tooltipProps: {
      ModalComponent: Modal,
      backgroundColor,
      style: styleProps.TooltipYrl,
      containerStyle: styleProps.containerStyle,
      withOverlay: true,
      withPointer: true,
      testID,
    },
    tooltipPopoverProps: {
      children,
      styleProps: { TooltipPopoverYrl: styleProps.TooltipPopoverYrl },
      testID: `TooltipPopoverYrl`,
    },
  }

  return (
    <Tooltip
      {...propsOut.tooltipProps}
      visible={isVisibleUsed}
      onOpen={() => {
        setIsVisibleUsed(true)
      }}
      onClose={() => {
        setIsVisibleUsed(false)
      }}
      popover={<TooltipPopoverYrl {...propsOut.tooltipPopoverProps} />}
      testID='Tooltip'
    >
      <View
        style={[style.iconTextWrapper, styleProps.iconTextWrapper]}
        testID='tooltiptViewWrapper'
      >
        <TextRrneui
          style={[style.titleText, styleProps.titleText]}
          testID='tooltipTitleText'
        >
          {titleText}
        </TextRrneui>
      </View>
    </Tooltip>
  )
}

export type { TooltipYrlPropsType, TooltipsPropsOutYrlType, TooltipYrlType }
