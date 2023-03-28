import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { SafeAreaView, Text } from 'react-native'

import { TopBarChatCardsType } from './TopBarChatCardsType'
import { TopBarChatCardsStyle as style } from './TopBarChatCardsStyle'
import { ButtonYrl } from '../../../ViewLibrary/ButtonYrl/ButtonYrl'
import { InputTextYrl } from '../../../ViewLibrary/InputTextYrl/InputTextYrl'
import { IconYrl } from '../../../ViewLibrary/IconYrl/IconYrl'
import { themes } from '../../Styles/themes'

/**
 * @import import { TopBarChatCards } from '../Components/TopBarChatCards/TopBarChatCards'
 */
export const TopBarChatCardsComponent: TopBarChatCardsType = props => {
  const { styleProps = { TopBarChatCards: {} } } = props

  const propsOut = {
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
        name: 'ios-menu-outline',
        size: '2rem',
        color: themes['themeA'].colors01.borderColor,
        testID: 'TopBarChatCardsComponent_ButtonYrl_ios-menu',
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
      name: 'ios-search-outline',
      styleProps: { IconYrl: { cursor: 'not-allowed' } },
      size: '1.5rem',
      color: themes['themeA'].colors01.borderColor,
      testID: 'TopBarChatCardsComponent_IconYrl_search',
    },
  }

  return (
    <SafeAreaView
      style={[style.TopBarChatCards, styleProps.TopBarChatCards]}
      testID='TopBarChatCards'
    >
      <SafeAreaView
        style={[style.buttonHamburgerWrapper]}
        testID='buttonHamburgerWrapper'
      >
        <ButtonYrl {...propsOut.buttonHamburgerProps} />
      </SafeAreaView>
      <SafeAreaView
        style={[style.inputTextYrlWrapper]}
        testID='inputTextYrlWrapper'
      >
        <InputTextYrl {...propsOut.inputTextYrlProps} />
        <SafeAreaView style={[style.iconYrlWrapper]} testID='iconYrlWrapper'>
          <IconYrl {...propsOut.searchIconYrlProps} />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  )
}

export const TopBarChatCards = React.memo(TopBarChatCardsComponent)
