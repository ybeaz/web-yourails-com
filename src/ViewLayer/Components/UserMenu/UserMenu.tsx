import React, { ReactElement } from 'react'
import { View } from 'react-native'

import {
  ButtonYrl,
  ImageYrl,
  IconYrl,
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

type UserMenuItemType = {
  title: string
  iconLibrary: string
  iconName: string
  color: string
}

/**
 * @import import { UserMenu } from '../Components/UserMenu/UserMenu'
 */
const UserMenuComponent: UserMenuType = props => {
  const { styleProps = { UserMenu: {} }, mediaParams = mediaParamsDefault } =
    props
  const { deviceType, screenCase, width, height } = mediaParams
  const style = styles[deviceType]

  const userMenuItems: UserMenuItemType[] = [
    {
      title: 'Select profile',
      iconLibrary: 'Ionicons',
      iconName: 'people-outline',
      color: themes['themeA'].colors01.color,
    },
    {
      title: 'Sign out',
      iconLibrary: 'Ionicons',
      iconName: 'log-out-outline',
      color: themes['themeA'].colors01.borderColor,
    },
  ]

  const getUserMenuItems = (
    userMenuItemsIn: UserMenuItemType[]
  ): ReactElement[] => {
    return userMenuItemsIn.map((userMenuItem: UserMenuItemType) => {
      const { title, iconLibrary, iconName, color } = userMenuItem

      const propsOut = {
        userMenuButtonYrlProps: {
          styleProps: { ButtonYrl: {}, title: {} },
          disabled: false,
          onPress: () => {
            console.info('ButtonYrl []', 'click test')
          },
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
    })
  }

  const propsOut: UserMenuPropsOutType = {}

  return (
    <View style={[style.UserMenu, styleProps.UserMenu]} testID='UserMenu'>
      {getUserMenuItems(userMenuItems)}
    </View>
  )
}

export type { UserMenuPropsType }
export const UserMenu = React.memo(withParamsMediaYrl(UserMenuComponent))
