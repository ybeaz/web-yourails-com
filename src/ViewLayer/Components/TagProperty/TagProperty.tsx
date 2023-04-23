import React, { useCallback } from 'react'
import { ScrollView, View, Modal } from 'react-native'
// import Modal from 'modal-react-native-web';

import { Text as TextRrneui } from '@rneui/themed'
import { Text } from '../Text/Text'
import { IconYrl } from '../../../YrlNativeViewLibrary/'
import { useLinkClickResYrl } from '../../../YrlNativeViewLibrary'
import { ButtonYrl } from '../../../YrlNativeViewLibrary'
import { ControlledTooltip } from '../ControlledTooltip/ControlledTooltip'
import { TagPropertyType } from './TagPropertyType'
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

  const propsOut: Record<string, any> = {
    tooltip_buttonYrlLinking: {
      styleProps: {
        ButtonYrl: {},
        title: {
          color: themes['themeA'].colors08.color,
          textDecoration: 'underline',
          paddingBottom: '0.5rem',
        },
      },
      titleText: `<${title} />`, //'<Documentation />',
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
        size: '1rem',
        color: themes['themeA'].colors02.color,
        testID: '<entity>_IconYrl_ios_send',
      },
    },
    iconProps: {
      library: iconLibrary,
      name: iconName,
      styleProps: { IconYrl: { cursor: 'pointer', paddingRight: '0.25rem' } },
      size: '1.5rem',
      color: themes['themeA'].colors02.color,
      testID: '<entity>_IconYrl_ios_send',
    },
  }

  return (
    <View style={[style.TagProperty, styleProps.TagProperty]} testID={testID}>
      <ControlledTooltip
        ModalComponent={Modal}
        backgroundColor={themes['themeA'].colors09.backgroundColor}
        popover={
          <View
            style={[style.tooltip_containerView]}
            testID={'tooltip_containerView'}
          >
            <ScrollView
              style={[style.tooltip_scrollView]}
              testID={'tooltip_scrollView'}
            >
              <ButtonYrl {...propsOut.tooltip_buttonYrlLinking} />
              <TextRrneui
                style={[style.tooltip_textRrneui]}
                testID={'tooltip_textRrneui'}
              >
                {tooltips}
              </TextRrneui>
            </ScrollView>
          </View>
        }
        containerStyle={[style.tooltip_container]}
        withOverlay={true}
        withPointer={true}
      >
        <Text style={style.tagIconTextWrapper} testID='tagIconTextWrapper'>
          {iconLibrary && iconName && <IconYrl {...propsOut.iconProps} />}
          <TextRrneui
            style={[
              style.titleText,
              { color: themes['themeA'].colors08.color },
            ]}
          >
            {title}
          </TextRrneui>
        </Text>
      </ControlledTooltip>
    </View>
  )
}

export const TagProperty = React.memo(TagPropertyComponent)
