import React from 'react'
import { View } from 'react-native'

import {
  TopBarChatCardsType,
  TopBarChatCardsPropsOutType,
} from './TopBarChatCardsType'

import {
  ButtonYrl,
  IconYrl,
  InputTextYrl,
  withStoreStateYrl,
  withParamsMediaYrl,
  urlParamsDefault,
  withPropsYrl,
} from '../../../YrlNativeViewLibrary'
import { themes } from '../../Styles/themes'
import { style } from './TopBarChatCardsStyle'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { AvatarPlusInfo } from '../AvatarPlusInfo/AvatarPlusInfo'
import { getProfileByIdProfile } from '../../../Shared/getProfileByIdProfile'
import '../../Styles/styleGlobal'

/**
 * @import import { TopBarChatCards } from '../Components/TopBarChatCards/TopBarChatCards'
 */
export const TopBarChatCardsComponent: TopBarChatCardsType = props => {
  const {
    styleProps = { TopBarChatCards: {} },
    handleEvents,
    urlParams: { urlParam1, urlParam2 } = urlParamsDefault,
    store,
  } = props

  const {
    componentsState: { isUserMenu },
    globalVars: { idProfileHost, idProfileActive },
    forms: { inputSearch },
    profiles,
  } = store

  const profileHost = getProfileByIdProfile(profiles, idProfileHost)
  const { avatarSrc } = profileHost

  const propsOut: TopBarChatCardsPropsOutType = {
    avatarPlusInfoProps: {
      styleProps: {
        avatar: {},
      },
      profile: profileHost,
      onPress: () => {
        handleEvents.CLICK_ON_MENU_CONTROL(
          {},
          {
            isProfileSelectMenu: false,
            isUserMenu: !isUserMenu,
          }
        )
      },
      testID: 'topBarChatCardsAvatarPlusInfo',
    },
    imageProfileHostAvatarProps: {
      styleProps: {
        ImageYrl: {},
        image: { width: 45, height: 45, borderRadius: 50 },
      },
      testID: 'imageProfileHostAvatarProps',
      uri: avatarSrc || '',
      resizeMode: 'cover',
    },
    buttonHamburgerProps: {
      styleProps: {
        ButtonYrl: {
          cursor: 'pointer',
          paddingLeft: '1rem'.getPx(),
        },
        title: {},
      },
      titleText: '',
      testID: 'ButtonYrl',
      disabled: false,
      onPress: () =>
        handleEvents.CLICK_ON_MENU_CONTROL(
          {},
          {
            isProfileSelectMenu: false,
            isUserMenu: !isUserMenu,
          }
        ),
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
          ...style.InputTextYrl,
          borderColor: themes.themeB.color08,
        },
        inputText: {
          ...style.inputText,
          ...themes.themeA.colors01,
        },
        inputTextResize: {},
      },
      multiline: false,
      numberOfLines: 1,
      onChangeText: (text: string) =>
        handleEvents.ON_CHANGE_INPUT_SEARCH({}, { text }),
      onSubmitEditing: () => {
        /* TODO when a search functionality will be ready */
      },
      placeholder: 'Search',
      placeholderTextColor: themes['themeB'].color10,
      testID: 'TopBarChatCards_InputTextYrl',
      value: inputSearch,
    },
    searchIconYrlProps: {
      library: 'Ionicons',
      name: 'search-outline',
      styleProps: { IconYrl: { cursor: 'not-allowed' } },
      size: 24,
      color: themes['themeB'].color10,
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
        {idProfileHost &&
        ((urlParam1 === 'k' && !urlParam2) ||
          idProfileActive !== idProfileHost) ? (
          <AvatarPlusInfo {...propsOut.avatarPlusInfoProps} />
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

export const TopBarChatCards = withPropsYrl({ handleEvents: handleEventsProp })(
  withStoreStateYrl(withParamsMediaYrl(React.memo(TopBarChatCardsComponent)))
)
