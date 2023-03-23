import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { ChatCardType } from './ChatCardType'
import { ChatCardStyle as style } from './ChatCardStyle'
import { ButtonYrl } from '../../../ViewLibrary/ButtonYrl/ButtonYrl'
import { themes } from '../../Styles/themes'
import { ImageYrl } from '../../../ViewLibrary/ImageYrl/ImageYrl'
import { AvatarNameStatus } from '../AvatarNameStatus/AvatarNameStatus'

import { users } from '../../../Constants/usersMock'

/**
 * @import import { ChatCard } from '../Components/ChatCard/ChatCard'
 */
const ChatCardComponent: ChatCardType = props => {
  const { user, styleProps = { ChatCard: {} } } = props

  const propsOut = {
    avatarNameStatusProps: {
      user,
      styleProps: {
        viewStyle: themes['themeA'].colors07,
      },
    },
  }

  return (
    <View
      style={[style.ChatCard, styleProps.ChatCard, themes['themeA'].colors07]}
      testID='ChatCard'
    >
      <AvatarNameStatus {...propsOut.avatarNameStatusProps} />
    </View>
  )
}

export const ChatCard = React.memo(ChatCardComponent)
