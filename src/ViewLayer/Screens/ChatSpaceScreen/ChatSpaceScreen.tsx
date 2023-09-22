import React, { useMemo } from 'react'
import { View } from 'react-native'

import {
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'

import { useWidgetsScreensProps } from '../../Hooks/useWidgetsScreensProps'
import { LayoutScreen } from '../../Frames/LayoutScreen/LayoutScreen'
import { LayoutOfRow } from '../../Frames/LayoutOfRow/LayoutOfRow'
import { TopBarMainColumn } from '../../Components/TopBarMainColumn/TopBarMainColumn'
import { ContentMenuMainColumn } from '../../Components/ContentMenuMainColumn/ContentMenuMainColumn'
import { ChatSpace } from '../../Components/ChatSpace/ChatSpace'
import { ChatInput } from '../../Components/ChatInput/ChatInput'

import { Text } from '../../Components/Text/Text'
import { themes } from '../../Styles/themes'
import {
  ChatSpaceScreenPropsType,
  ChatSpaceScreenPropsOutType,
  ChatSpaceScreenComponentType,
  ChatSpaceScreenType,
} from './ChatSpaceScreenTypes'
import { styles } from './ChatSpaceScreenStyles'

/**
 * @description Component to render
 * @import import { ChatSpaceScreen, ChatSpaceScreenPropsType, ChatSpaceScreenPropsOutType, ChatSpaceScreenType } 
             from '../Components/ChatSpaceScreen/ChatSpaceScreen'
 */
const ChatSpaceScreenComponent: ChatSpaceScreenComponentType = props => {
  // const {
  //   styleProps = { ChatSpaceScreen: {} },
  //   mediaParams = mediaParamsDefault,
  //   onLayout
  // } = props
  // const { deviceType, screenCase, width, height } = mediaParams
  // const style = styles[deviceType]
  const propsOut: ChatSpaceScreenPropsOutType = useWidgetsScreensProps(props)

  // const propsOut: ChatSpaceScreenPropsOutType = {}

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
        {ChatSpaceHeader}
      </LayoutOfRow>
      {/** @description <MainContent /> */}
      <LayoutOfRow {...propsOut.layoutOfRowMainContentProps}>
        {ChatSpaceBody}
      </LayoutOfRow>
      {/** @description <NavigationBottom /> */}
      {!propsOut.isShowModalFrame && (
        <LayoutOfRow {...propsOut.layoutOfRowNavigationBottomProps}>
          {ChatSpaceFooter}
        </LayoutOfRow>
      )}
    </LayoutScreen>
  )
}

export const ChatSpaceScreen: ChatSpaceScreenType = withParamsMediaYrl(
  React.memo(ChatSpaceScreenComponent)
)

export type {
  ChatSpaceScreenPropsType,
  ChatSpaceScreenPropsOutType,
  ChatSpaceScreenComponentType,
  ChatSpaceScreenType,
}
