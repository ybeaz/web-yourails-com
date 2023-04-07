import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'

import { ChatCardType } from './ChatCardType'
import { style } from './ChatCardStyle'
import { themes } from '../../Styles/themes'
import { NameStatus } from '../NameStatus/NameStatus'
import { AvatarPlusInfo } from '../AvatarPlusInfo/AvatarPlusInfo'

/**
 * @import import { ChatCard } from '../Components/ChatCard/ChatCard'
 */
const ChatCardComponent: ChatCardType = props => {
  const { user, styleProps = { ChatCard: {} } } = props

  const propsOut = {
    avatarPlusInfoProps: {
      user,
      styleProps: {
        viewStyle: themes['themeA'].colors07,
      },
    },
    nameStatusProps: {
      styleProps: {
        NameStatus: {},
        viewStyle: themes['themeA'].colors07,
      },
      user,
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

export const ChatCard = React.memo(ChatCardComponent)
