import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'

import { ContentMenuMainColumnType } from './ContentMenuMainColumnType'
import { style } from './ContentMenuMainColumnStyle'
import { ButtonYrl } from '../../../YrlNativeViewLibrary/ButtonYrl/ButtonYrl'
import {
  MENU_CONTENT_ITEMS,
  MenuContentItemsType,
} from '../../../Constants/menuContentItems.const'
import { themes } from '../../Styles/themes'

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
            color: 'green',
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
            themes['themeA'].colors01,
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

export const ContentMenuMainColumn = React.memo(ContentMenuMainColumnComponent)
