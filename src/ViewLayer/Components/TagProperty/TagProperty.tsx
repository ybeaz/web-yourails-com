import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text, Modal } from 'react-native'
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

  if (title === 'Agile') {
    console.info('TagProperty [23]', { id, title, linkHref, tooltips })
  }

  const propsOut = {}

  return (
    <View style={[style.TagProperty, styleProps.TagProperty]} testID={testID}>
      <ControlledTooltip
        ModalComponent={Modal}
        backgroundColor={lightColors.secondary}
        popover={
          <TextRrneui>
            Tooltip info goes here too. Find tooltip everywhere
          </TextRrneui>
        }
        containerStyle={{ width: 200, height: 60 }}
        withOverlay={true}
        // withPointer={true}
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
