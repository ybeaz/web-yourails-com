import React, { useMemo } from 'react'
import { View } from 'react-native'

import {
  withParamsMediaYrl,
  mediaParamsDefault,
  withStoreStateSliceYrl,
  withPropsYrl,
} from '../../../YrlNativeViewLibrary'

import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { styles as stylesIn } from './ChatSpaceScreenStyles'

import { useWidgetsScreensProps } from '../../Hooks/useWidgetsScreensProps'
import { LayoutScreen } from '../../Frames/LayoutScreen/LayoutScreen'
import { LayoutOfRow } from '../../Frames/LayoutOfRow/LayoutOfRow'
import { TopBarMainColumn } from '../../Components/TopBarMainColumn/TopBarMainColumn'
import { ContentMenuMainColumn } from '../../Components/ContentMenuMainColumn/ContentMenuMainColumn'
import { ChatSpace } from '../../Components/ChatSpace/ChatSpace'
import { ChatInput } from '../../Components/ChatInput/ChatInput'
import {
  ChatSpaceScreenPropsType,
  ChatSpaceScreenPropsOutType,
  ChatSpaceScreenComponentType,
  ChatSpaceScreenType,
} from './ChatSpaceScreenTypes'

import { DebugHome } from '../../Components/DebugHome/DebugHome'

/**
 * @description Component to render
 * @import import { ChatSpaceScreen, ChatSpaceScreenPropsType, ChatSpaceScreenPropsOutType, ChatSpaceScreenType } 
             from '../Components/ChatSpaceScreen/ChatSpaceScreen'
 */
const ChatSpaceScreenComponent: ChatSpaceScreenComponentType = props => {
  const { onLayout } = props
  const propsOut: ChatSpaceScreenPropsOutType = useWidgetsScreensProps(props)

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
          style={[propsOut.themes['themeA'].colors01]}
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

  const debugHomeProps = {
    onLayout, // : () => {},
    titleText: 'New Title 2',
  }
  // <DebugHome {...{ ...props, ...debugHomeProps }} />

  return (
    <LayoutScreen {...propsOut.layoutScreenProps}>
      {/* <DebugHome {...{ ...props, ...debugHomeProps }} /> */}
      {/** @description <Header /> */}
      <LayoutOfRow {...propsOut.layoutOfRowHeaderProps}>
        {ChatSpaceHeader}
        {null}
      </LayoutOfRow>
      {/** @description <Body /> */}
      <LayoutOfRow {...propsOut.layoutOfRowBodyProps}>
        {ChatSpaceBody}
        {null}
      </LayoutOfRow>
      {/** @description <Footer /> */}
      {!propsOut.isShowModalFrame && (
        <LayoutOfRow {...propsOut.layoutOfRowFooterProps}>
          {ChatSpaceFooter}
          {null}
        </LayoutOfRow>
      )}
    </LayoutScreen>
  )
}

export const ChatSpaceScreen: ChatSpaceScreenType = withPropsYrl({
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
    withParamsMediaYrl(React.memo(ChatSpaceScreenComponent))
  )
)

export type {
  ChatSpaceScreenPropsType,
  ChatSpaceScreenPropsOutType,
  ChatSpaceScreenComponentType,
  ChatSpaceScreenType,
}
