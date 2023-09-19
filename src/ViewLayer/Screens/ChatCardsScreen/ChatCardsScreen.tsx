import React, { useMemo } from 'react'
import { View } from 'react-native'

import {
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { Text } from '../../Components/Text/Text'

import { TopBarChatCards } from '../../Components/TopBarChatCards/TopBarChatCards'
import { ChatCards } from '../../Components/ChatCards/ChatCards'
import { LayoutScreen } from '../../Frames/LayoutScreen/LayoutScreen'
import { LayoutOfRow } from '../../Frames/LayoutOfRow/LayoutOfRow'
import { useWidgetsScreensProps } from '../../Hooks/useWidgetsScreensProps'

import {
  ChatCardsScreenPropsType,
  ChatCardsScreenPropsOutType,
  ChatCardsScreenComponentType,
  ChatCardsScreenType,
} from './ChatCardsScreenTypes'
import { styles } from './ChatCardsScreenStyles'

/**
 * @description Component to render
 * @import import { ChatCardsScreen, ChatCardsScreenPropsType, ChatCardsScreenPropsOutType, ChatCardsScreenType } 
             from '../Components/ChatCardsScreen/ChatCardsScreen'
 */
const ChatCardsScreenComponent: ChatCardsScreenComponentType = props => {
  const propsOut = useWidgetsScreensProps(props)

  const ChatCardsHeader = useMemo(
    () => (
      <View
        style={[propsOut.style.leftColumnTopBars]}
        testID='leftColumnTopBars'
      >
        <TopBarChatCards />
      </View>
    ),
    []
  )

  const ChatCardsBody = useMemo(
    () => (
      <View
        style={[propsOut.style.leftColumnChatCardSpace]}
        testID='leftColumnChatCardSpace'
      >
        <ChatCards />
      </View>
    ),
    []
  )

  return (
    <LayoutScreen {...propsOut.layoutScreenProps}>
      {/** @description <NavigationTop /> */}
      <LayoutOfRow {...propsOut.layoutOfRowNavigationTopProps}>
        {ChatCardsHeader}
      </LayoutOfRow>
      {/** @description <MainContent /> */}
      <LayoutOfRow {...propsOut.layoutOfRowMainContentProps}>
        {ChatCardsBody}
      </LayoutOfRow>
      {/** @description <NavigationBottom /> */}
      {!propsOut.isShowModalFrame && (
        <LayoutOfRow {...propsOut.layoutOfRowNavigationBottomProps}>
          {null}
        </LayoutOfRow>
      )}
    </LayoutScreen>
  )
}

export const ChatCardsScreen: ChatCardsScreenType = withParamsMediaYrl(
  React.memo(ChatCardsScreenComponent)
)

export type {
  ChatCardsScreenPropsType,
  ChatCardsScreenPropsOutType,
  ChatCardsScreenComponentType,
  ChatCardsScreenType,
}
