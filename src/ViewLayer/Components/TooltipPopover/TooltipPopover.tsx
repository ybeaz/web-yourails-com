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
    content: 'string',
    linkHref: 'string',
    iconLibrary: 'string',
    iconName: 'string',
    testID: 'TooltipPopover',
  }
 */
const TooltipPopoverComponent: TooltipPopoverType = props => {
  const {
    title,
    content,
    linkHref,
    iconLibrary,
    iconName,
    testID,
    styleProps = { TooltipPopover: {} },
    mediaParams = mediaParamsDefault,
  } = props
  const { deviceType } = mediaParams
  const style = styles[deviceType]

  const propsOut: TooltipPopoverPropsOutType = {
    buttonYrlLinkingProps: {
      styleProps: {
        ButtonYrl: {},
        title: {
          color: themes['themeA'].colors08.color,
          textDecoration: 'underline',
          paddingBottom: '0.5rem',
        },
      },
      titleText: title,
      testID: 'tooltip_buttonYrl',
      disabled: false,
      onPress: useLinkClickResYrl(linkHref),
      iconProps: {
        library: iconLibrary,
        name: iconName,
        styleProps: {
          IconYrl: {
            cursor: 'pointer',
            paddingRight: '0.25rem',
            paddingBottom: '0.25rem',
          },
        },
        size: 16,
        color: themes['themeA'].colors02.color,
        testID: 'tooltipPopoverText',
      },
    },
    textProps: {
      styleProps: { Text: style.text },
      testID: 'tooltipPopoverText',
    },
  }

  return (
    <View
      style={[style.TooltipPopover, styleProps.TooltipPopover]}
      testID={testID ? testID : 'TooltipPopover'}
    >
      <ScrollView
        style={[style.scrollView, styleProps.scrollView]}
        testID={'scrollView'}
      >
        <ButtonYrl {...propsOut.buttonYrlLinkingProps} />
        <Text styleProps={{ Text: style.text }} testID={'text'}>
          {content}
        </Text>
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
