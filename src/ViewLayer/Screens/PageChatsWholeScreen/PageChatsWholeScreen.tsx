import React, { useMemo } from 'react'
import { View } from 'react-native'

import {
  withParamsMediaYrl,
  withPropsYrl,
  withStoreStateSliceYrl,
} from '../../../YrlNativeViewLibrary'

import {
  PageChatsWholeScreenPropsType,
  PageChatsWholeScreenPropsOutType,
  PageChatsWholeScreenType,
} from './PageChatsWholeScreenType'
import { LayoutScreen } from '../../Frames/LayoutScreen/LayoutScreen'
import { LayoutOfRow } from '../../Frames/LayoutOfRow/LayoutOfRow'
import { TopBarChatCards } from '../../Components/TopBarChatCards/TopBarChatCards'
import { ChatCards } from '../../Components/ChatCards/ChatCards'
import { TopBarMainColumn } from '../../Components/TopBarMainColumn/TopBarMainColumn'
import { ContentMenuMainColumn } from '../../Components/ContentMenuMainColumn/ContentMenuMainColumn'
import { ChatSpace } from '../../Components/ChatSpace/ChatSpace'
import { ChatInput } from '../../Components/ChatInput/ChatInput'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { styles as stylesIn } from './PageChatsWholeScreenStyle'
import { useWidgetsScreensProps } from '../../Hooks/useWidgetsScreensProps'

const PageChatsWholeScreenComponent: PageChatsWholeScreenType = props => {
  const propsOut: PageChatsWholeScreenPropsOutType =
    useWidgetsScreensProps(props)

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

  const ChatSpaceHeader = (
    <View
      style={[
        propsOut.style.chatSpaceHeader,
        propsOut.themes['themeA'].colors03,
      ]}
      testID='chatSpaceHeader'
    >
      {!propsOut.isMainColumnBlank ? (
        <View
          style={[
            propsOut.style.mainColumnTopBar,
            {
              borderStyle: 'solid',
              // borderTopWidth: 1,
              // borderRightWidth: 1,
              borderBottomWidth: 1,
              borderLeftWidth: 1,
            },
            propsOut.themes['themeA'].colors01,
          ]}
          testID='mainColumnTopBar'
        >
          <TopBarMainColumn />
        </View>
      ) : null}

      {!propsOut.isMainColumnBlank &&
      propsOut.sectionsMappingForProfile.length ? (
        <View
          style={[
            propsOut.style.mainColumnContentMenu,
            propsOut.themes['themeA'].colors01,
          ]}
          testID='mainColumnContentMenu'
        >
          <ContentMenuMainColumn {...propsOut.mainColumnContentMenuProps} />
        </View>
      ) : null}
    </View>
  )

  const ChatSpaceBody = useMemo(
    () => (
      <View style={[propsOut.style.chatSpaceBody]} testID='chatSpaceBody'>
        <ChatSpace />
      </View>
    ),
    []
  )

  const ChatSpaceFooter = useMemo(
    () => (
      <View
        style={[
          propsOut.style.chatSpaceFooter,
          propsOut.themes['themeA'].colors03,
        ]}
        testID='chatSpaceFooter'
      >
        <ChatInput />
      </View>
    ),
    []
  )

  return (
    <LayoutScreen {...propsOut.layoutScreenProps}>
      {/** @description <Header /> */}
      <LayoutOfRow {...propsOut.layoutOfRowHeaderProps}>
        {ChatCardsHeader}
        {ChatSpaceHeader}
      </LayoutOfRow>
      {/** @description <Body /> */}
      <LayoutOfRow {...propsOut.layoutOfRowBodyProps}>
        {ChatCardsBody}
        {ChatSpaceBody}
      </LayoutOfRow>
      {/** @description <Footer /> */}
      {!propsOut.isShowModalFrame ? (
        <LayoutOfRow {...propsOut.layoutOfRowFooterProps}>
          {null}
          {ChatSpaceFooter}
        </LayoutOfRow>
      ) : null}
    </LayoutScreen>
  )
}

export const PageChatsWholeScreen = withPropsYrl({
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
    withParamsMediaYrl(React.memo(PageChatsWholeScreenComponent))
  )
)

export type {
  PageChatsWholeScreenPropsType,
  PageChatsWholeScreenPropsOutType,
  PageChatsWholeScreenType,
}
