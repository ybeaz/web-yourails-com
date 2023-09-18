import React, { useMemo } from 'react'
import { View } from 'react-native'

import {
  withParamsMediaYrl,
  withPropsYrl,
  withStoreStateSliceYrl,
} from '../../../YrlNativeViewLibrary'

import { PageChatsWholeScreenType } from './PageChatsWholeScreenType'
import { LayoutScreen } from '../../Frames/LayoutScreen/LayoutScreen'
import { LayoutOfRow } from '../../Frames/LayoutOfRow/LayoutOfRow'
import { ChatCards } from '../../Components/ChatCards/ChatCards'
import { ChatInput } from '../../Components/ChatInput/ChatInput'
import { ChatSpace } from '../../Components/ChatSpace/ChatSpace'
import { ContentMenuMainColumn } from '../../Components/ContentMenuMainColumn/ContentMenuMainColumn'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { styles as stylesIn } from './PageChatsWholeScreenStyle'
import { TopBarChatCards } from '../../Components/TopBarChatCards/TopBarChatCards'
import { TopBarMainColumn } from '../../Components/TopBarMainColumn/TopBarMainColumn'
import { useWidgetsScreensProps } from '../../Hooks/useWidgetsScreensProps'

const PageChatsWholeScreenComponent: PageChatsWholeScreenType = props => {
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

  const ChatSpaceHeader = (
    <View
      style={[
        propsOut.style.ChatSpaceHeader,
        propsOut.themes['themeA'].colors03,
      ]}
      testID='ChatSpaceHeader'
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

  const ChatSpaceBody = useMemo(() => <ChatSpace />, [])

  const ChatSpaceFooter = useMemo(
    () => (
      <View
        style={[propsOut.style.chatInput, propsOut.themes['themeA'].colors03]}
        testID='chatInput'
      >
        <ChatInput />
      </View>
    ),
    []
  )

  return (
    <LayoutScreen {...propsOut.layoutScreenProps}>
      {/** @description <NavigationTop /> */}
      <LayoutOfRow {...propsOut.layoutOfRowNavigationTopProps}>
        {ChatCardsHeader}
        {ChatSpaceHeader}
      </LayoutOfRow>
      {/** @description <MainContent /> */}
      <LayoutOfRow {...propsOut.layoutOfRowMainContentProps}>
        {ChatCardsBody}
        {ChatSpaceBody}
      </LayoutOfRow>
      {/** @description <NavigationBottom /> */}
      {!propsOut.isShowModalFrame && (
        <LayoutOfRow {...propsOut.layoutOfRowNavigationBottomProps}>
          {null}
          {ChatSpaceFooter}
        </LayoutOfRow>
      )}
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
