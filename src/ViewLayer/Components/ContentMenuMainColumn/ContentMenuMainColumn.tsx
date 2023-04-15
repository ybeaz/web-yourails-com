import React from 'react'
import { View } from 'react-native'

import { ContentMenuMainColumnType } from './ContentMenuMainColumnType'
import { style } from './ContentMenuMainColumnStyle'
import { ButtonYrl } from '../../../YrlNativeViewLibrary'
import {
  MENU_CONTENT_ITEMS,
  MenuContentItemsType,
} from '../../../Constants/menuContentItems.const'
import { themes } from '../../Styles/themes'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { withPropsYrl } from '../../../YrlNativeViewLibrary'

/**
 * @import import { ContentMenuMainColumn } from '../Components/ContentMenuMainColumn/ContentMenuMainColumn'
 */
const ContentMenuMainColumnComponent: ContentMenuMainColumnType = props => {
  const {
    styleProps = { ContentMenuMainColumn: {} },
    store,
    handleEvents,
  } = props

  const {
    componentsState: {
      modalFrame: { childName: childNameModalStore, isShow: isShowModalStore },
    },
  } = store

  const getMenuContentItems = (menuContentItemsIn: MenuContentItemsType[]) => {
    return menuContentItemsIn.map((menuContentItem: any, index: number) => {
      const { iconLibrary, iconName, iconTitleText, childName } =
        menuContentItem

      const propsOut: Record<string, any> = {
        buttonProps: {
          styleProps: {
            ButtonYrl: {
              cursor: 'pointer',
            },
            title: {
              paddingLeft: '0.5rem',
            },
          },
          titleText: iconTitleText,
          testID: 'ButtonYrl',
          disabled: false,
          onPress: (event: any) =>
            handleEvents.SET_MODAL_FRAME(event, {
              childName,
              isShow: true,
              childProps: {},
            }),
          iconProps: {
            library: iconLibrary,
            name: iconName,
            size: '1.5rem',
            color: themes['themeA'].colors01.color,
            testID: 'TopBarChatCardsComponent_ButtonYrl_ios-menu',
          },
        },
      }

      const styleForActiveMenuItem =
        childNameModalStore === childName && isShowModalStore
          ? { backgroundColor: themes['themeA'].colors03.backgroundColor }
          : {}

      return (
        <View
          key={`menuContentItem-${index}`}
          style={[
            style.buttonWrapper,
            {
              borderTopWidth: 0,
              borderRightWidth: 1,
              borderBottomWidth: 0,
              borderLeftWidth: 0,
              borderTopColor: themes['themeA'].colors01.borderColor,
              borderRightColor: themes['themeA'].colors01.borderColor,
              borderBottomColor: themes['themeA'].colors01.borderColor,
              borderLeftColor: themes['themeA'].colors01.borderColor,
            },
            styleForActiveMenuItem,
          ]}
          testID='buttonWrapper'
        >
          <ButtonYrl {...propsOut.buttonProps} />
        </View>
      )
    })
  }

  const propsOut: Record<string, any> = {}

  return (
    <View
      style={[style.ContentMenuMainColumn, styleProps.ContentMenuMainColumn]}
      testID='ContentMenuMainColumn'
    >
      {getMenuContentItems(MENU_CONTENT_ITEMS)}
    </View>
  )
}

export const ContentMenuMainColumn = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(
    ContentMenuMainColumnComponent
  )
)
