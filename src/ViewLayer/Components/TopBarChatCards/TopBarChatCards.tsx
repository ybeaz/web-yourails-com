import React from 'react'
import { View } from 'react-native'

import {
  ButtonYrl,
  ImageYrl,
  IconYrl,
  InputTextYrl,
  withParamsMediaYrl,
  mediaParamsDefault,
  urlParamsDefault,
  withPropsYrl,
} from '../../../YrlNativeViewLibrary'
import {
  TopBarChatCardsType,
  TopBarChatCardsPropsOutType,
} from './TopBarChatCardsType'
import { themes } from '../../Styles/themes'
import { style } from './TopBarChatCardsStyle'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'

/**
 * @import import { TopBarChatCards } from '../Components/TopBarChatCards/TopBarChatCards'
 */
export const TopBarChatCardsComponent: TopBarChatCardsType = props => {
  const {
    styleProps = { TopBarChatCards: {} },
    profileHost: { idProfile, profileName, uriAvatar },
    idProfileActive,
    handleEvents,
    mediaParams: { deviceType } = mediaParamsDefault,
    urlParams: { urlParam1, urlParam2 } = urlParamsDefault,
    urlParamsSearch: query,
  } = props

  console.info('TopBarChatCards [36]', {
    idProfile,
    idProfileActive,
    profileName,
    uriAvatar,
    urlParam1,
    urlParam2,
    query,
    'idProfileActive !== idProfile': idProfileActive !== idProfile,
  })

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
    withParamsMediaYrl(TopBarChatCardsComponent)
  )
)
