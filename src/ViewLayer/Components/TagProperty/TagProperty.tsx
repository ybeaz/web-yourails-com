import React from 'react'
import { View, Modal } from 'react-native'

import { TooltipPopover } from '../TooltipPopover/TooltipPopover'
import { Text } from '../Text/Text'
import {
  IconYrl,
  useLinkClickResYrl,
  ButtonYrl,
} from '../../../YrlNativeViewLibrary/'
import { ControlledTooltip } from '../ControlledTooltip/ControlledTooltip'
import {
  TagPropertyType,
  TagPropertyPropsOutM1Type,
  TagPropertyPropsOutType,
} from './TagPropertyType'
import { style } from './TagPropertyStyle'
import { themes } from '../../Styles/themes'

/**
 * @import import { TagProperty } from '../Components/TagProperty/TagProperty'
 * @link Tooltip props: https://reactnativeelements.com/docs/components/tooltip
 */
const TagPropertyComponent: TagPropertyType = props => {
  const {
    styleProps = { TagProperty: {} },
    id,
    title,
    linkHref,
    tooltips,
    iconLibrary,
    iconName,
    testID = 'TagProperty',
  } = props

  const propsOutM1: TagPropertyPropsOutM1Type = {
    tooltipsLinkingButtonYrlProps: {
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
    tooltipsTextProps: {
      styleProps: { Text: style.tooltipsText },
      testID: 'tooltipPopoverText',
    },
  }

  const tooltipsContent = (
    <>
      {' '}
      <ButtonYrl {...propsOutM1.tooltipsLinkingButtonYrlProps} />
      <Text {...propsOutM1.tooltipsTextProps}>{tooltips}</Text>
    </>
  )

  const propsOut: TagPropertyPropsOutType = {
    tooltipPopoverProps: {
      title: `<${title} />`,
      children: tooltipsContent,
      linkHref,
      iconLibrary,
      iconName,
      testID: `tooltip_${title}_${id}`,
    },
    iconProps: {
      library: iconLibrary,
      name: iconName,
      styleProps: { IconYrl: { cursor: 'pointer', paddingRight: '0.25rem' } },
      size: 24,
      color: themes['themeA'].colors02.color,
      testID: 'tagProperty_IconYrl',
    },
  }

  return (
    <View style={[style.TagProperty, styleProps.TagProperty]} testID={testID}>
      <ControlledTooltip
        ModalComponent={Modal}
        backgroundColor={themes['themeA'].colors09.backgroundColor}
        popover={<TooltipPopover {...propsOut.tooltipPopoverProps} />}
        containerStyle={[style.tooltip_container]}
        withOverlay={true}
        withPointer={true}
        testID='controlledTooltip'
      >
        <View style={style.tagIconTextWrapper} testID='tagIconTextWrapper'>
          <Text
            style={[
              style.titleText,
              { color: themes['themeA'].colors08.color },
            ]}
            testID='tagIconText'
          >
            {iconLibrary && iconName && <IconYrl {...propsOut.iconProps} />}
            {title}
          </Text>
        </View>
      </ControlledTooltip>
    </View>
  )
}

export const TagProperty = React.memo(TagPropertyComponent)
