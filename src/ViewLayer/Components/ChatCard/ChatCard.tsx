import React from 'react'
import { View } from 'react-native'

import {
  withParamsMediaYrl,
  mediaParamsDefault,
  withPropsYrl,
} from '../../../YrlNativeViewLibrary'
import { ChatCardType } from './ChatCardType'
import { style } from './ChatCardStyle'
import { themes } from '../../Styles/themes'
import { NameStatus } from '../NameStatus/NameStatus'
import { AvatarPlusInfo } from '../AvatarPlusInfo/AvatarPlusInfo'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'

/**
 * @import import { ChatCard } from '../Components/ChatCard/ChatCard'
 */
const ChatCardComponent: ChatCardType = props => {
  const {
    profile,
    styleProps = { ChatCard: {} },
    isActive,
    handleEvents,
    mediaParams: { deviceType } = mediaParamsDefault,
    urlParam1,
    urlParam2,
    query,
  } = props
  const { idProfile, profileName } = profile

  const colorStyle = isActive ? themes['themeA'].colors07 : {}

  const propsOut: Record<string, any> = {
    avatarPlusInfoProps: {
      styleProps: {},
      profile,
      onPress: () => {
        handleEvents.CLICK_TOGGLE_SIDEBAR_MAIN({}, { deviceType })
        handleEvents.CLICK_ON_USER_CHAT_CARD(
          {},
          { idProfile, profileName, urlParam1, urlParam2, query }
        )
      },
    },
    nameStatusProps: {
      styleProps: {
        NameStatus: {},
        viewStyle: colorStyle,
      },
      profile,
      status: 'last seen recently',
    },
  }

  return (
    <View
      style={[style.ChatCard, styleProps.ChatCard, colorStyle]}
      testID='ChatCard'
    >
      <AvatarPlusInfo {...propsOut.avatarPlusInfoProps}>
        <NameStatus {...propsOut.nameStatusProps} />
      </AvatarPlusInfo>
    </View>
  )
}

export const ChatCard = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(ChatCardComponent)
)
