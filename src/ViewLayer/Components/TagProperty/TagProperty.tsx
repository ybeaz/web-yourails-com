import React, { useCallback } from 'react'
import { Alert, Linking, ScrollView, View, Modal } from 'react-native'
// import Modal from 'modal-react-native-web';

import {
  Tooltip,
  TooltipProps,
  Text as TextRrneui,
  lightColors,
} from '@rneui/themed'

import { ButtonYrl } from '../../../YrlNativeViewLibrary/ButtonYrl/ButtonYrl'
import { ControlledTooltip } from '../ControlledTooltip/ControlledTooltip'
import { TagPropertyType } from './TagPropertyType'
import { TagPropertyStyle as style } from './TagPropertyStyle'
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
    testID = 'TagProperty',
  } = props

  const url = linkHref
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url)
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`)
    }
  }, [url])

  const propsOut = {
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
      onPress: () => handlePress(),
      iconProps: undefined,
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
        <TextRrneui
          style={[style.titleText, { color: themes['themeA'].colors08.color }]}
        >
          {title}
        </TextRrneui>
      </ControlledTooltip>
    </View>
  )
}

export const TagProperty = React.memo(TagPropertyComponent)
