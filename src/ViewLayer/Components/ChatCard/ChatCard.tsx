import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'

import { withDeviceType, mediaParamsDefault } from '../../Hooks/withDeviceType'
import { ChatCardType } from './ChatCardType'
import { style } from './ChatCardStyle'
import { themes } from '../../Styles/themes'
import { NameStatus } from '../NameStatus/NameStatus'
import { AvatarPlusInfo } from '../AvatarPlusInfo/AvatarPlusInfo'
import { handleEvents } from '../../../DataLayer/index.handleEvents'

/**
 * @import import { ChatCard } from '../Components/ChatCard/ChatCard'
 */
const ChatCardComponent: ChatCardType = props => {
  const {
    profile,
    styleProps = { ChatCard: {} },
    mediaParams = mediaParamsDefault,
  } = props
  const { deviceType } = mediaParams

  const propsOut: Record<string, any> = {
    avatarPlusInfoProps: {
      profile,
      styleProps: {
        viewStyle: themes['themeA'].colors07,
      },
      onPress: () => {
        handleEvents.CLICK_TOGGLE_SIDEBAR_MAIN({}, { deviceType })
      },
    },
    nameStatusProps: {
      styleProps: {
        NameStatus: {},
        viewStyle: themes['themeA'].colors07,
      },
      profile,
      status: 'last seen recently',
    },
  }

  return (
    <View
      style={[style.ChatCard, styleProps.ChatCard, themes['themeA'].colors07]}
      testID='ChatCard'
    >
      <AvatarPlusInfo {...propsOut.avatarPlusInfoProps}>
        <NameStatus {...propsOut.nameStatusProps} />
      </AvatarPlusInfo>
    </View>
  )
}

export const ChatCard = React.memo(withDeviceType(ChatCardComponent))
