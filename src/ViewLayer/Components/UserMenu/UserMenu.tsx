import React, { ReactElement } from 'react'
import { View } from 'react-native'
import '../../Styles/styleGlobal'

import {
  ButtonYrl,
  IconYrl,
  withPropsYrl,
  withStoreStateYrl,
  withParamsMediaYrl,
  mediaParamsDefault,
  urlParamsDefault,
  useLinkClickResYrl,
} from '../../../YrlNativeViewLibrary'
import {
  AWS_COGNITO_URL,
  AWS_COGNITO_CLIENT_ID,
} from '../../../Constants/aws.const'
import { CLIENTS } from '../../../Constants/clients.const'

import { Text } from '../../Components/Text/Text'

import { UserMenuType, UserMenuPropsType } from './UserMenuTypes'
import { themes } from '../../Styles/themes'
import { styles } from './UserMenuStyles'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { getProfileByIdProfile } from '../../../Shared/getProfileByIdProfile'
import { getDetectedEnv } from '../../../Shared/getDetectedEnv'
import { getRedirected } from '../../../Shared/getRedirected'

type UserMenuItemType = {
  title: string
  isActive: boolean
  iconLibrary: string
  iconName: string
  color: string
  onPress: any // () => void | void
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
    platformOS,
    store,
  } = props

  console.info('UserMenu [63]', { platformOS })

  const {
    globalVars: { idProfileHost },
    profiles,
  } = store

  const { profileName: profileNameHost } = getProfileByIdProfile(
    profiles,
    idProfileHost
  )

  const environment = getDetectedEnv()
  const redirect_url: CLIENTS = CLIENTS[environment]
  const linkSignIn = `${AWS_COGNITO_URL}/login?client_id=${AWS_COGNITO_CLIENT_ID}&response_type=code&redirect_uri=${redirect_url}&&scope=email+openid+profile`
  const linkAboutUs = `/k/@yourails/about`

  const style = styles[deviceType]

  const userMenuItems: UserMenuItemType[] = [
    {
      title: 'Select profile',
      isActive: !!idProfileHost && idProfileHost !== '0',
      iconLibrary: 'Ionicons',
      iconName: 'people-outline',
      color: themes['themeA'].colors01.color,
      onPress: () =>
        handleEvents.CLICK_ON_USER_OPTION_SELECT(
          {},
          { isUserMenu: false, isProfileSelectMenu: true }
        ),
    },
    {
      title: 'This profile',
      isActive: !!idProfileHost && idProfileHost !== '0',
      iconLibrary: 'Ionicons',
      iconName: 'person-outline',
      color: themes['themeA'].colors01.color,
      onPress: () => {
        handleEvents.CLICK_TOGGLE_SIDEBAR_MAIN({}, { platformOS, deviceType })
        handleEvents.CLICK_ON_USER_CHAT_CARD(
          {},
          {
            idProfile: idProfileHost,
            profileName: profileNameHost,
            urlParam1,
            urlParam2,
            query,
            platformOS,
          }
        )
        handleEvents.CLICK_ON_USER_OPTION_SELECT(
          {},
          { isUserMenu: false, isProfileSelectMenu: false }
        )
      },
    },
    {
      title: 'About YouRails',
      isActive: true,
      iconLibrary: 'Ionicons',
      iconName: 'book-outline',
      color: themes['themeA'].colors01.color,
      onPress: () => {
        getRedirected(linkAboutUs, { platformOS, replace: true })
        handleEvents.CLICK_ON_MENU_CONTROL(
          {},
          {
            isProfileSelectMenu: false,
            isUserMenu: false,
          }
        )
      },
    },
    {
      title: 'Sign in',
      isActive: !idProfileHost || idProfileHost === '0',
      iconLibrary: 'Ionicons',
      iconName: 'log-in-outline',
      color: themes['themeA'].colors01.color,
      onPress: useLinkClickResYrl(linkSignIn),
    },
    {
      title: 'Sign out',
      isActive: !!idProfileHost && idProfileHost !== '0',
      iconLibrary: 'Ionicons',
      iconName: 'log-out-outline',
      color: themes['themeA'].colors01.color,
      onPress: () => {
        handleEvents.CLICK_ON_SIGN_OUT({}, {})
      },
    },
  ]

  const getUserMenuItems = (
    userMenuItemsIn: UserMenuItemType[]
  ): ReactElement[] => {
    return userMenuItemsIn
      .filter(
        (userMenuItem: UserMenuItemType) => userMenuItem.isActive === true
      )
      .map((userMenuItem: UserMenuItemType, index: number) => {
        const { title, iconLibrary, iconName, color, onPress } = userMenuItem

        const propsOut = {
          userMenuButtonYrlProps: {
            key: `userMenuItem-${index}`,
            styleProps: {
              ButtonYrl: {
                paddingLeft: '1rem'.getPx(),
                paddingBottom: '1rem'.getPx(),
              },
              title: {},
            },
            disabled: false,
            onPress,
            testID: 'userMenuButtonYrl',
          },
          userMenuIconYrlProps: {
            library: iconLibrary,
            name: iconName,
            styleProps: { IconYrl: { paddingRight: '0.5rem'.getPx() } },
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
      })
  }

  return (
    <View style={[style.UserMenu, styleProps.UserMenu]} testID='UserMenu'>
      {getUserMenuItems(userMenuItems)}
    </View>
  )
}

export type { UserMenuPropsType }
export const UserMenu = withPropsYrl({ handleEvents: handleEventsProp })(
  withStoreStateYrl(withParamsMediaYrl(React.memo(UserMenuComponent)))
)
