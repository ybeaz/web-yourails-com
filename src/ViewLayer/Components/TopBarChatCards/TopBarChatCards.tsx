import React, { useState } from 'react'
import { View } from 'react-native'

import { ButtonYrl } from '../../../YrlNativeViewLibrary'
import { IconYrl } from '../../../YrlNativeViewLibrary'
import { InputTextYrl } from '../../../YrlNativeViewLibrary'
import { themes } from '../../Styles/themes'
import { style } from './TopBarChatCardsStyle'
import { TopBarChatCardsType } from './TopBarChatCardsType'

/**
 * @import import { TopBarChatCards } from '../Components/TopBarChatCards/TopBarChatCards'
 */
export const TopBarChatCardsComponent: TopBarChatCardsType = props => {
  const { styleProps = { TopBarChatCards: {} } } = props

  const propsOut: Record<string, any> = {
    buttonHamburgerProps: {
      styleProps: {
        ButtonYrl: {
          cursor: 'not-allowed',
        },
        title: {},
      },
      titleText: '',
      testID: 'ButtonYrl',
      disabled: false,
      onPress: () => {},
      iconProps: {
        library: 'Ionicons',
        name: 'menu-outline',
        size: 32,
        color: themes['themeA'].colors01.borderColor,
        testID: 'TopBarChatCardsComponent_ButtonYrl_menu-outline',
      },
    },
    inputTextYrlProps: {
      styleProps: {
        InputTextYrl: {
          border: 'solid  1px',
          borderColor: themes['themeA'].colors01.borderColor,
          borderRadius: '5rem',
        },
        inputText: {
          cursor: 'not-allowed',
          border: 0,
          outline: 0,
          paddingLeft: '1rem',
        },
      },
      multiline: false,
      numberOfLines: 1,
      onChangeText: () => {},
      placeholder: 'Search',
      placeholderTextColor: themes['themeA'].colors01.borderColor,
      testID: 'TopBarChatCards_InputTextYrl',
      value: '',
    },
    searchIconYrlProps: {
      library: 'Ionicons',
      name: 'search-outline',
      styleProps: { IconYrl: { cursor: 'not-allowed' } },
      size: 24,
      color: themes['themeA'].colors01.borderColor,
      testID: 'TopBarChatCardsComponent_IconYrl_search',
    },
  }

  return (
    <View
      style={[style.TopBarChatCards, styleProps.TopBarChatCards]}
      testID='TopBarChatCards'
    >
      <View
        style={[style.buttonHamburgerWrapper]}
        testID='buttonHamburgerWrapper'
      >
        <ButtonYrl {...propsOut.buttonHamburgerProps} />
      </View>
      <View style={[style.inputTextYrlWrapper]} testID='inputTextYrlWrapper'>
        <InputTextYrl {...propsOut.inputTextYrlProps} />
        <View style={[style.iconYrlWrapper]} testID='iconYrlWrapper'>
          {/* <RemoteSVG /> */}
          <IconYrl {...propsOut.searchIconYrlProps} />
        </View>
      </View>
    </View>
  )
}

export const TopBarChatCards = React.memo(TopBarChatCardsComponent)
