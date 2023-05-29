import React, { ReactElement } from 'react'
import { View } from 'react-native'

import {
  ButtonYrl,
  ImageYrl,
  IconYrl,
  withPropsYrl,
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { Text } from '../../Components/Text/Text'
import {
  ProfileSelectMenuType,
  ProfileSelectMenuPropsOutType,
} from './ProfileSelectMenuTypes'
import { styles } from './ProfileSelectMenuStyles'
import { themes } from '../../Styles/themes'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'

type UserMenuItemType = {
  title: string
  iconLibrary: string
  iconName: string
  color: string
  onPress: () => void
}

/**
 * @import import { ProfileSelectMenu } from '../Components/ProfileSelectMenu/ProfileSelectMenu'
 */
const ProfileSelectMenuComponent: ProfileSelectMenuType = props => {
  const {
    styleProps = { ProfileSelectMenu: {} },
    mediaParams = mediaParamsDefault,
    handleEvents,
  } = props
  const { deviceType, screenCase, width, height } = mediaParams
  const style = styles[deviceType]

  // TODO: A NEW USER WITH SEVERAL PROFILES. YOU CAN NOT CHANGE THIS USER, BUT YOU CAN SELECT DIFFERENT PROFILES
  // OR YOU NEED TO BE ABLE TO CHANGE THE USER

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

  const propsOut: ProfileSelectMenuPropsOutType = {}

  return (
    <View
      style={[style.ProfileSelectMenu, styleProps.ProfileSelectMenu]}
      testID='ProfileSelectMenu'
    >
      <Text>123</Text>
    </View>
  )
}

export const ProfileSelectMenu = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(
    withParamsMediaYrl(ProfileSelectMenuComponent)
  )
)
