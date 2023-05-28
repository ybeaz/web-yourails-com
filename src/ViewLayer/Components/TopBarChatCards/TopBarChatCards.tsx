import React from 'react'
import { View } from 'react-native'

import { ProfileType } from '../../../@types/ProfileType'
import {
  TopBarChatCardsType,
  TopBarChatCardsPropsOutType,
} from './TopBarChatCardsType'

import {
  ButtonYrl,
  ImageYrl,
  IconYrl,
  InputTextYrl,
  withStoreStateYrl,
  withParamsMediaYrl,
  mediaParamsDefault,
  urlParamsDefault,
  withPropsYrl,
} from '../../../YrlNativeViewLibrary'
import { themes } from '../../Styles/themes'
import { style } from './TopBarChatCardsStyle'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'

/**
 * @import import { TopBarChatCards } from '../Components/TopBarChatCards/TopBarChatCards'
 */
export const TopBarChatCardsComponent: TopBarChatCardsType = props => {
  const {
    styleProps = { TopBarChatCards: {} },
    handleEvents,
    mediaParams: { deviceType } = mediaParamsDefault,
    urlParams: { urlParam1, urlParam2 } = urlParamsDefault,
    urlParamsSearch: query,
    store,
  } = props

  const {
    globalVars: { idProfileHost, idProfileActive },
    forms: { inputSearch },
    profiles,
  } = store

  const profileHost: ProfileType | undefined =
    profiles &&
    profiles.find(profile => profile.idProfile == (idProfileHost || '1'))
  const { idProfile, profileName, uriAvatar } = profileHost
    ? profileHost
    : { idProfile: '0', profileName: '@', uriAvatar: '' }

  const propsOut: TopBarChatCardsPropsOutType = {
    buttonProfileHostAvatarProps: {
      styleProps: {
        ButtonYrl: {},
        title: {},
      },
      titleText: '',
      testID: 'buttonProfileHostAvatarProps',
      disabled: false,
      onPress: () => {
        handleEvents.CLICK_TOGGLE_SIDEBAR_MAIN({}, { deviceType })
        handleEvents.CLICK_ON_USER_CHAT_CARD(
          {},
          { idProfile, profileName, urlParam1, urlParam2, query }
        )
      },
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
          cursor: 'pointer',
        },
        title: {},
      },
      titleText: '',
      testID: 'ButtonYrl',
      disabled: false,
      onPress: () => handleEvents.CLICK_ON_BUTTON_NUMBURGER({}, {}),
    },
    iconHamburgerProps: {
      library: 'Ionicons',
      name: 'menu-outline',
      size: 32,
      color: themes['themeA'].colors01.color,
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
          // cursor: 'not-allowed',
          border: 0,
          outline: 0,
          paddingLeft: '1rem',
        },
      },
      multiline: false,
      numberOfLines: 1,
      onChangeText: (text: string) =>
        handleEvents.ON_CHANGE_INPUT_SEARCH({}, { text }),
      onSubmitEditing: () => {
        /* TODO when a search functionality will be ready */
      },
      placeholder: 'Search',
      placeholderTextColor: themes['themeA'].colors01.borderColor,
      testID: 'TopBarChatCards_InputTextYrl',
      value: inputSearch,
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
        {(urlParam1 === 'k' && !urlParam2) || idProfileActive !== idProfile ? (
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

export const TopBarChatCards = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(
    withStoreStateYrl(withParamsMediaYrl(TopBarChatCardsComponent))
  )
)
