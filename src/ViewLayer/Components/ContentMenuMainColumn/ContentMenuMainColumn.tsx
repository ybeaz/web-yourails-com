import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text } from 'react-native'

import { ContentMenuMainColumnType } from './ContentMenuMainColumnType'
import { ContentMenuMainColumnStyle as style } from './ContentMenuMainColumnStyle'
import { ButtonYrl } from '../../../ViewLibrary/ButtonYrl/ButtonYrl'
import { IconYrl } from '../../../ViewLibrary/IconYrl/IconYrl'
import { themes } from '../../Styles/themes'

/**
 * @import import { ContentMenuMainColumn } from '../Components/ContentMenuMainColumn/ContentMenuMainColumn'
 */
const ContentMenuMainColumnComponent: ContentMenuMainColumnType = props => {
  const { styleProps = { ContentMenuMainColumn: {} }, handleEvents } = props

  const menuContentItems = [
    {
      iconLibrary: 'Ionicons',
      iconName: 'chatbubbles-outline',
      iconTitleText: 'Chat',
      childName: 'Chat',
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'cog-outline',
      iconTitleText: 'Skills',
      childName: 'TagsProperties',
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'briefcase-outline',
      iconTitleText: 'Portfolio',
      childName: 'Portfolio',
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'person-outline',
      iconTitleText: 'Profile',
      childName: 'Profile',
    },
  ]

  const getMenuContentItems = (menuContentItemsIn: any[]) => {
    return menuContentItemsIn.map((menuContentItem: any, index: number) => {
      const { iconLibrary, iconName, iconTitleText, childName } =
        menuContentItem

      const propsOut = {
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

      return (
        <View
          key={`menuContentItem-${index}`}
          style={[style.buttonWrapper, themes['themeA'].colors01]}
          testID='buttonWrapper'
        >
          <ButtonYrl {...propsOut.buttonProps} />
        </View>
      )
    })
  }

  const propsOut = {}

  return (
    <View
      style={[style.ContentMenuMainColumn, styleProps.ContentMenuMainColumn]}
      testID='ContentMenuMainColumn'
    >
      {getMenuContentItems(menuContentItems)}
    </View>
  )
}

export const ContentMenuMainColumn = React.memo(ContentMenuMainColumnComponent)
