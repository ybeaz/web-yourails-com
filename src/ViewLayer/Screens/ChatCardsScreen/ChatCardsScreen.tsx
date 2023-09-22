import React, { useMemo } from 'react'
import { View } from 'react-native'

import {
  withParamsMediaYrl,
  mediaParamsDefault,
  withStoreStateSliceYrl,
  withPropsYrl,
} from '../../../YrlNativeViewLibrary'

import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'

import { TopBarChatCards } from '../../Components/TopBarChatCards/TopBarChatCards'
import { ChatCards } from '../../Components/ChatCards/ChatCards'
import { LayoutScreen } from '../../Frames/LayoutScreen/LayoutScreen'
import { LayoutOfRow } from '../../Frames/LayoutOfRow/LayoutOfRow'
import { useWidgetsScreensProps } from '../../Hooks/useWidgetsScreensProps'
import { DebugHome } from '../../Components/DebugHome/DebugHome'

import {
  ChatCardsScreenPropsType,
  ChatCardsScreenPropsOutType,
  ChatCardsScreenComponentType,
  ChatCardsScreenType,
} from './ChatCardsScreenTypes'
import { styles as stylesIn } from './ChatCardsScreenStyles'

/**
 * @description Component to render
 * @import import { ChatCardsScreen, ChatCardsScreenPropsType, ChatCardsScreenPropsOutType, ChatCardsScreenType } 
             from '../Components/ChatCardsScreen/ChatCardsScreen'
 */
const ChatCardsScreenComponent: ChatCardsScreenComponentType = props => {
  const propsOut: ChatCardsScreenPropsOutType = useWidgetsScreensProps(props)

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
    // <DebugHome {...debugHomeProps} />
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

export const ChatCardsScreen: ChatCardsScreenType = withPropsYrl({
  handleEvents: handleEventsProp,
  styles: stylesIn,
})(
  withStoreStateSliceYrl(
    [
      'idProfileActive',
      'isLeftColumn',
      'isMainColumn',
      'isMainColumnBlank',
      'modalFrame',
      'profiles',
      'sectionsMapping',
    ],
    withParamsMediaYrl(React.memo(ChatCardsScreenComponent))
  )
)

export type {
  ChatCardsScreenPropsType,
  ChatCardsScreenPropsOutType,
  ChatCardsScreenComponentType,
  ChatCardsScreenType,
}
