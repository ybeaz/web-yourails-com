import React, { ReactElement } from 'react'
import { Platform, View, FlatList } from 'react-native'
import { v5 as uuidv5 } from 'uuid'

import {
  urlParamsDefault,
  mediaParamsDefault,
  withParamsMediaYrl,
  withStoreStateSliceYrl,
  withPropsYrl,
  ModalFrameYrl,
} from '../../../YrlNativeViewLibrary'
import { ProfileType } from '../../../@types/GraphqlTypes'
import { ChatCardsType } from './ChatCardsTypes'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { styles } from './ChatCardsStyles'
import { themes } from '../../Styles/themes'
import { ChatCard } from '../ChatCard/ChatCard'
import { UserMenu } from '../UserMenu/UserMenu'
import { ProfileSelectMenu } from '../ProfileSelectMenu/ProfileSelectMenu'
import { getProfilesSearched } from '../../../Shared/getProfilesSearched'
import '../../Styles/styleGlobal'

/**
 * @import import { ChatCards } from '../Components/ChatCards/ChatCards'
 */
const ChatCardsComponent: ChatCardsType = props => {
  const {
    styleProps = {
      ChatCards: {},
    },
    mediaParams = mediaParamsDefault,
    urlParams = urlParamsDefault,
    storeStateSlice,
    handleEvents,
    urlParamsSearch,
  } = props
  const { deviceType } = mediaParams
  const { urlParam1, urlParam2 } = urlParams

  const {
    isUserMenu,
    isProfileSelectMenu,
    idUserHost,
    idProfileHost,
    idProfileActive,
    inputSearch,
    profiles,
  } = storeStateSlice

  const style = styles[deviceType]

  const profilesSearched = getProfilesSearched(profiles, inputSearch)
  const profilesSorted = profilesSearched.sort(
    // @ts-expect-error
    (a, b) => b.position - a.position
  )

  let query = { s: undefined }
  if (Platform.OS === 'web') {
    query = {
      s: urlParamsSearch.get('s'),
    }
  }

  const profilesFiltered = profilesSorted.filter((profile: ProfileType) => {
    const { profileID } = profile
    return profileID !== '0' && profileID !== idProfileHost
  })

  const renderItem = ({
    item: profile,
  }: {
    item: ProfileType
  }): ReactElement => {
    const propsOut: Record<string, any> = {
      chatCardProps: {
        profile,
        isActive: profile.profileID === idProfileActive,
        urlParam1,
        urlParam2,
        query,
      },
    }
    return <ChatCard {...propsOut.chatCardProps} />
  }

  const propsOut: Record<string, any> = {
    flatListProps: {
      data: profilesFiltered,
      renderItem,
      keyExtractor: (item: any) =>
        uuidv5(JSON.stringify(item), '1b671a64-40d5-491e-99b0-da01ff1f3349'),
      initialNumToRender: 15,
      contentContainerStyle: {},
    },
    modalFrameYrlProps: {
      styleProps: {
        ModalFrameYrl: {},
        imageBackground: {
          backgroundColor: themes['themeA'].colors07.backgroundColor,
        },
        content: {},
        buttonBackWrapper: {},
        buttonCloseWrapper: { top: '1rem'.getPx(), right: '1rem'.getPx() },
      },
      linearGradientColors: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.25)'],
      isShow: isUserMenu || isProfileSelectMenu,
      isShowImageBackground: true,
      testID: 'ChatSpace_modalFrameYrl',
      buttonBackProps: {
        styleProps: { ButtonYrl: {}, title: {} },
        titleText: '',
        testID: 'ModalFrameYrl-buttonBack',
        disabled: false,
        onPress: () => {},
        iconProps: {
          styleProps: { IconYrl: {} },
          library: 'Ionicons',
          name: 'arrow-back-outline',
          size: 24,
          color: '', // themes['themeA'].colors07.color,
          testID: 'ModalFrameYrl-buttonBack-iconBack',
        },
      },
      buttonCloseProps: {
        styleProps: { ButtonYrl: {}, title: {} },
        titleText: '',
        testID: 'ModalFrameYrl-buttonClose',
        disabled: false,
        onPress: () => {
          handleEvents.CLICK_ON_MENU_CONTROL(
            {},
            {
              isProfileSelectMenu: false,
              isUserMenu: false,
            }
          )
        },
        iconProps: {
          styleProps: { IconYrl: {} },
          library: 'Ionicons',
          name: 'close',
          size: 24,
          color: themes['themeA'].colors07.color,
          testID: 'ModalFrameYrl-buttonClose-iconClose',
        },
      },
      imageBackgroundSource: undefined, // require('../../../Assets/canopy-of-leaves-2.jpg'),
      isButtonBack: false,
      isButtonClose: true,
    },
    userMenuProps: {
      styleProps: {
        UserMenu: {
          ...themes['themeA'].colors01,
        },
      },
    },
    profileSelectMenuProps: {
      styleProps: {
        ProfileSelectMenu: {
          ...themes['themeA'].colors01,
        },
      },
      profiles,
      idUserHost,
      urlParam1,
      urlParam2,
      query,
    },
  }

  return (
    <View style={[style.ChatCards]} testID='ChatCards'>
      {!isUserMenu && !isProfileSelectMenu ? (
        <FlatList {...propsOut.flatListProps} />
      ) : (
        <ModalFrameYrl {...propsOut.modalFrameYrlProps}>
          {isUserMenu ? (
            <UserMenu {...propsOut.userMenuProps} />
          ) : (
            <ProfileSelectMenu {...propsOut.profileSelectMenuProps} />
          )}
        </ModalFrameYrl>
      )}
    </View>
  )
}

export const ChatCards = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(
    withStoreStateSliceYrl(
      [
        'isUserMenu',
        'isProfileSelectMenu',
        'idUserHost',
        'idProfileHost',
        'idProfileActive',
        'inputSearch',
        'profiles',
      ],
      withParamsMediaYrl(ChatCardsComponent)
    )
  )
)
