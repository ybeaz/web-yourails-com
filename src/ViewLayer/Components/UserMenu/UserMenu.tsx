import React, { ReactElement } from 'react'
import { View } from 'react-native'

import {
  ButtonYrl,
  IconYrl,
  withPropsYrl,
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { Text } from '../../Components/Text/Text'
import {
  UserMenuType,
  UserMenuPropsType,
  UserMenuPropsOutType,
} from './UserMenuTypes'
import { themes } from '../../Styles/themes'
import { styles } from './UserMenuStyles'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'

type UserMenuItemType = {
  title: string
  iconLibrary: string
  iconName: string
  color: string
  onPress: () => void
}

/**
 * @import import { UserMenu } from '../Components/UserMenu/UserMenu'
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
    mediaParams = mediaParamsDefault,
    handleEvents,
  } = props
  const { deviceType, screenCase, width, height } = mediaParams
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
            styleProps: { ButtonYrl: {}, title: {} },
            disabled: false,
            onPress,
            testID: 'userMenuButtonYrlProps',
          },
          userMenuIconYrlProps: {
            library: iconLibrary,
            name: iconName,
            styleProps: { IconYrl: { paddingRight: '0.5rem' } },
            size: 24,
            color,
            testID: 'userMenuIconYrlProps',
          },
          userMenuTextProps: {
            styleProps: {
              Text: { color },
            },
            testID: 'userMenuTextProps',
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
    withParamsMediaYrl(UserMenuComponent)
  )
)
