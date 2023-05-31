import React, { ReactElement } from 'react'
import { View } from 'react-native'

import {
  ButtonYrl,
  IconYrl,
  withPropsYrl,
  withStoreStateYrl,
  withParamsMediaYrl,
  mediaParamsDefault,
  urlParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { Text } from '../../Components/Text/Text'

import { ProfileType } from '../../../@types/ProfileType'
import {
  UserMenuType,
  UserMenuPropsType,
  UserMenuPropsOutType,
} from './UserMenuTypes'
import { themes } from '../../Styles/themes'
import { styles } from './UserMenuStyles'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { getProfileByIdProfile } from '../../../Shared/getProfileByIdProfile'

type UserMenuItemType = {
  title: string
  iconLibrary: string
  iconName: string
  color: string
  onPress: () => void
}

/**
 * @import import { UserMenu } from '../Components/UserMenu/UserMenu'
 * @link https://oblador.github.io/react-native-vector-icons/
 * @propsOut
   userMenuProps: {
      styleProps: {
        UserMenu: {
          ...themes['themeA'].colors01,
        },
      },
   },
 */
const UserMenuComponent: UserMenuType = props => {
  const {
    styleProps = { UserMenu: {} },
    handleEvents,
    mediaParams: { deviceType } = mediaParamsDefault,
    urlParams: { urlParam1, urlParam2 } = urlParamsDefault,
    urlParamsSearch: query,
    store,
  } = props

  const {
    globalVars: { idProfileHost },
    profiles,
  } = store

  const { profileName: profileNameHost } = getProfileByIdProfile(
    profiles,
    idProfileHost
  )

  const style = styles[deviceType]

  const userMenuItems: UserMenuItemType[] = [
    {
      title: 'Select profile',
      iconLibrary: 'Ionicons',
      iconName: 'people-outline',
      color: themes['themeA'].colors01.color,
      onPress: () => handleEvents.CLICK_ON_PROFILE_SELECT({}, {}),
    },
    {
      title: 'This profile',
      iconLibrary: 'Ionicons',
      iconName: 'person-outline',
      color: themes['themeA'].colors01.color,
      onPress: () => {
        handleEvents.CLICK_TOGGLE_SIDEBAR_MAIN({}, { deviceType })
        handleEvents.CLICK_ON_USER_CHAT_CARD(
          {},
          {
            idProfile: idProfileHost,
            profileName: profileNameHost,
            urlParam1,
            urlParam2,
            query,
          }
        )
      },
    },

    {
      title: 'Sign out',
      iconLibrary: 'Ionicons',
      iconName: 'log-out-outline',
      color: themes['themeA'].colors01.borderColor,
      onPress: () => {},
    },
  ]

  const getUserMenuItems = (
    userMenuItemsIn: UserMenuItemType[]
  ): ReactElement[] => {
    return userMenuItemsIn.map(
      (userMenuItem: UserMenuItemType, index: number) => {
        const { title, iconLibrary, iconName, color, onPress } = userMenuItem

        const propsOut = {
          userMenuButtonYrlProps: {
            key: `userMenuItem-${index}`,
            styleProps: {
              ButtonYrl: { paddingLeft: '1rem', paddingBottom: '1rem' },
              title: {},
            },
            disabled: false,
            onPress,
            testID: 'userMenuButtonYrl',
          },
          userMenuIconYrlProps: {
            library: iconLibrary,
            name: iconName,
            styleProps: { IconYrl: { paddingRight: '0.5rem' } },
            size: 24,
            color,
            testID: 'userMenuIconYrl',
          },
          userMenuTextProps: {
            styleProps: {
              Text: { color },
            },
            testID: 'userMenuText',
          },
        }

        return (
          <ButtonYrl {...propsOut.userMenuButtonYrlProps}>
            <>
              <IconYrl {...propsOut.userMenuIconYrlProps} />
              <Text {...propsOut.userMenuTextProps}>{title}</Text>
            </>
          </ButtonYrl>
        )
      }
    )
  }

  const propsOut: UserMenuPropsOutType = {}

  return (
    <View style={[style.UserMenu, styleProps.UserMenu]} testID='UserMenu'>
      {getUserMenuItems(userMenuItems)}
    </View>
  )
}

export type { UserMenuPropsType }
export const UserMenu = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(
    withStoreStateYrl(withParamsMediaYrl(UserMenuComponent))
  )
)
