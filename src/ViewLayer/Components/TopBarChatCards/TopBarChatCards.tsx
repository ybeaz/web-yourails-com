import React, { useState } from 'react'
import { View } from 'react-native'

import {
  ButtonYrl,
  ImageYrl,
  IconYrl,
  InputTextYrl,
} from '../../../YrlNativeViewLibrary'
import { themes } from '../../Styles/themes'
import { style } from './TopBarChatCardsStyle'
import {
  TopBarChatCardsType,
  TopBarChatCardsPropsOutType,
} from './TopBarChatCardsType'

/**
 * @import import { TopBarChatCards } from '../Components/TopBarChatCards/TopBarChatCards'
 */
export const TopBarChatCardsComponent: TopBarChatCardsType = props => {
  const {
    styleProps = { TopBarChatCards: {} },
    profileHost: { idProfile, uriAvatar },
    idProfileActive,
  } = props

  const propsOut: TopBarChatCardsPropsOutType = {
    buttonProfileHostAvatarProps: {
      styleProps: {
        ButtonYrl: {
          cursor: 'not-allowed',
        },
        title: {},
      },
      titleText: '',
      testID: 'buttonProfileHostAvatarProps',
      disabled: false,
      onPress: () => {},
    },
    imageProfileHostAvatarProps: {
      styleProps: {
        ImageYrl: {},
        image: { width: 45, height: 45, borderRadius: 50 },
      },
      testID: 'imageProfileHostAvatarProps',
      uri: uriAvatar,
      resizeMode: 'cover',
    },
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
    },
    iconHamburgerProps: {
      library: 'Ionicons',
      name: 'menu-outline',
      size: 32,
      color: themes['themeA'].colors01.borderColor,
      testID: 'TopBarChatCardsComponent_ButtonYrl_menu-outline',
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
        {idProfileActive !== idProfile ? (
          <ButtonYrl {...propsOut.buttonProfileHostAvatarProps}>
            <ImageYrl {...propsOut.imageProfileHostAvatarProps} />
          </ButtonYrl>
        ) : (
          <ButtonYrl {...propsOut.buttonHamburgerProps}>
            <IconYrl {...propsOut.iconHamburgerProps} />
          </ButtonYrl>
        )}
      </View>
      <View style={[style.inputTextYrlWrapper]} testID='inputTextYrlWrapper'>
        <InputTextYrl {...propsOut.inputTextYrlProps} />
        <View style={[style.iconYrlWrapper]} testID='iconYrlWrapper'>
          <IconYrl {...propsOut.searchIconYrlProps} />
        </View>
      </View>
    </View>
  )
}

export const TopBarChatCards = React.memo(TopBarChatCardsComponent)
