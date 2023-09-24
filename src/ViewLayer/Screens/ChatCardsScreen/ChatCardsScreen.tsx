import React, { useMemo } from 'react'
import { View } from 'react-native'

import {
  withParamsMediaYrl,
  withStoreStateSliceYrl,
  withPropsYrl,
} from '../../../YrlNativeViewLibrary'

import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { styles as stylesIn } from './ChatCardsScreenStyles'

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

/**
 * @description Component to render
 * @import import { ChatCardsScreen, ChatCardsScreenPropsType, ChatCardsScreenPropsOutType, ChatCardsScreenType } 
             from '../Components/ChatCardsScreen/ChatCardsScreen'
 */
const ChatCardsScreenComponent: ChatCardsScreenComponentType = props => {
  const propsOut: ChatCardsScreenPropsOutType = useWidgetsScreensProps(props)
  console.info('ChatCardsScreen [33]', propsOut)

  const ChatCardsHeader = useMemo(
    () => (
      <View style={[propsOut.style.chatCardsHeader]} testID='chatCardsHeader'>
        <TopBarChatCards />
      </View>
    ),
    []
  )

  const ChatCardsBody = useMemo(
    () => (
      <View style={[propsOut.style.chatCardsBody]} testID='chatCardsBody'>
        <ChatCards />
      </View>
    ),
    []
  )

  return (
    // <DebugHome {...debugHomeProps} />
    <LayoutScreen {...propsOut.layoutScreenProps}>
      {/** @description <Header /> */}
      <LayoutOfRow {...propsOut.layoutOfRowHeaderProps}>
        {ChatCardsHeader}
      </LayoutOfRow>
      {/** @description <Body /> */}
      <LayoutOfRow {...propsOut.layoutOfRowBodyProps}>
        {ChatCardsBody}
      </LayoutOfRow>
      {/** @description <Footer /> */}
      {!propsOut.isShowModalFrame && (
        <LayoutOfRow {...propsOut.layoutOfRowFooterProps}>{null}</LayoutOfRow>
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
