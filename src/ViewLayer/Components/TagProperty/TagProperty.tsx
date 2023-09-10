import React from 'react'
import { View } from 'react-native'

import { Text } from '../Text/Text'
import {
  IconYrl,
  useLinkClickResYrl,
  ButtonYrl,
  TooltipYrl,
} from '../../../YrlNativeViewLibrary/'
import {
  TagPropertyPropsType,
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
      titleText: title || '',
      testID: 'tooltip_buttonYrl',
      disabled: false,
      onPress: linkHref ? useLinkClickResYrl(linkHref) : () => {},
      iconProps: {
        library: iconLibrary || '',
        name: iconName || '',
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
    iconProps: {
      library: iconLibrary || '',
      name: iconName || '',
      styleProps: { IconYrl: { cursor: 'pointer', paddingRight: '0.25rem' } },
      size: 24,
      color: themes['themeA'].colors02.color,
      testID: 'tagProperty_IconYrl',
    },
  }

  const tooltipsContent = (
    <>
      <ButtonYrl {...propsOutM1.tooltipsLinkingButtonYrlProps} />
      <Text {...propsOutM1.tooltipsTextProps}>{tooltips}</Text>
    </>
  )

  const tooltipsTitle = (
    <>
      <Text
        style={[style.titleText, { color: themes['themeA'].colors08.color }]}
        testID='tagIconText'
      >
        {iconLibrary && iconName && <IconYrl {...propsOutM1.iconProps} />}
        {title}
      </Text>
    </>
  )

  const propsOut: TagPropertyPropsOutType = {
    tooltipYrlProps: {
      backgroundColor: themes['themeA'].colors09.backgroundColor,
      children: tooltipsContent,
      styleProps: {
        TooltipYrl: {},
        iconTextWrapper: style.tagIconTextWrapper,
        titleText: [
          style.titleText,
          { color: themes['themeA'].colors08.color },
        ],
        containerStyle: style.tooltip_container,
      },
      testID: `tooltip_${title}_${testID}`,
      titleText: tooltipsTitle,
    },
  }

  return (
    <View style={[style.TagProperty, styleProps.TagProperty]} testID={testID}>
      <TooltipYrl {...propsOut.tooltipYrlProps} />
    </View>
  )
}

export const TagProperty = React.memo(TagPropertyComponent)

export type { TagPropertyPropsType }
