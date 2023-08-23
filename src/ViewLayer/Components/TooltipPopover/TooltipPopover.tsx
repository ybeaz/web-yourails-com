import React from 'react'
import { ScrollView, View } from 'react-native'

import {
  ButtonYrl,
  useLinkClickResYrl,
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { Text } from '../../Components/Text/Text'
import { themes } from '../../Styles/themes'
import {
  TooltipPopoverPropsType,
  TooltipPopoverPropsOutType,
  TooltipPopoverType,
} from './TooltipPopoverTypes'
import { styles } from './TooltipPopoverStyles'

/**
 * @description Component to render
 * @import import { TooltipPopover, TooltipPopoverType, TooltipPopoverPropsType, TooltipPopoverPropsOutType } from '../Components/TooltipPopover/TooltipPopover'
 * @propsOut 
  tooltipPopoverProps: {
    styleProps: { TooltipPopover: {}, scrollView: {}, text: {} },
    title: 'string',
    children: 'string | ReactEelement',
    linkHref: 'string',
    iconLibrary: 'string',
    iconName: 'string',
    testID: 'TooltipPopover',
  }
 */
const TooltipPopoverComponent: TooltipPopoverType = props => {
  const {
    children,
    testID,
    styleProps = { TooltipPopover: {} },
    mediaParams = mediaParamsDefault,
  } = props
  const { deviceType } = mediaParams
  const style = styles[deviceType]

  return (
    <View
      style={[style.TooltipPopover, styleProps.TooltipPopover]}
      testID={testID ? testID : 'TooltipPopover'}
    >
      <ScrollView
        style={[style.scrollView, styleProps.scrollView]}
        testID={'scrollView'}
      >
        {children}
      </ScrollView>
    </View>
  )
}

export const TooltipPopover = React.memo(
  withParamsMediaYrl(TooltipPopoverComponent)
)
export type {
  TooltipPopoverType,
  TooltipPopoverPropsType,
  TooltipPopoverPropsOutType,
}
