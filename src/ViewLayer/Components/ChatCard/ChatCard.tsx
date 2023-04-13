import React from 'react'
import { View } from 'react-native'

import {
  withDeviceTypeYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { ChatCardType } from './ChatCardType'
import { style } from './ChatCardStyle'
import { themes } from '../../Styles/themes'
import { NameStatus } from '../NameStatus/NameStatus'
import { AvatarPlusInfo } from '../AvatarPlusInfo/AvatarPlusInfo'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { withPropsYrl } from '../../../YrlNativeViewLibrary'

/**
 * @import import { ChatCard } from '../Components/ChatCard/ChatCard'
 */
const ChatCardComponent: ChatCardType = props => {
  const {
    profile,
    styleProps = { ChatCard: {} },
    mediaParams = mediaParamsDefault,
    handleEvents,
  } = props
  const { idUser } = profile
  const { deviceType } = mediaParams

  const propsOut: Record<string, any> = {
    avatarPlusInfoProps: {
      profile,
      styleProps: {
        viewStyle: themes['themeA'].colors07,
      },
      onPress: () => {
        handleEvents.CLICK_TOGGLE_SIDEBAR_MAIN({}, { deviceType })
        handleEvents.CLICK_ON_USER_CHAT_CARD({}, { idUser })
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

export const ChatCard = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(
    withDeviceTypeYrl(ChatCardComponent)
  )
)
