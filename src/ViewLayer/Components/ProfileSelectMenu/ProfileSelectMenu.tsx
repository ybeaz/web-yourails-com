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
import { NameStatus } from '../NameStatus/NameStatus'
import {
  ProfileSelectMenuType,
  ProfileSelectMenuPropsOutType,
} from './ProfileSelectMenuTypes'
import { ProfileType } from '../../../@types/ProfileType'
import { AvatarPlusInfo } from '../AvatarPlusInfo/AvatarPlusInfo'
import { styles } from './ProfileSelectMenuStyles'
import { themes } from '../../Styles/themes'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'

/**
 * @import import { ProfileSelectMenu } from '../Components/ProfileSelectMenu/ProfileSelectMenu'
 * @propsOut
   profileSelectMenuProps: {
      styleProps: {
        ProfileSelectMenu: {
          ...themes['themeA'].colors01,
        },
      },
      profiles,
      idUserHost,
   },
 */
const ProfileSelectMenuComponent: ProfileSelectMenuType = props => {
  const {
    styleProps = { ProfileSelectMenu: {} },
    mediaParams = mediaParamsDefault,
    handleEvents,
    profiles,
    idUserHost,
  } = props
  const { deviceType, screenCase, width, height } = mediaParams
  const style = styles[deviceType]

  const profilesUserHost = profiles.filter(
    (profile: ProfileType) => profile.idUser === idUserHost
  )

  const getProfilesUserHost = (
    profilesUserHostIn: ProfileType[]
  ): ReactElement[] => {
    return profilesUserHostIn.map((profile: ProfileType, index: number) => {
      const propsOut = {
        userMenuButtonYrlProps: {
          key: `userMenuItem-${index}`,
          styleProps: { ButtonYrl: {}, title: {} },
          disabled: false,
          onPress: () => {},
          testID: 'userMenuButtonYrlProps',
        },
        avatarPlusInfoProps: {
          styleProps: {},
          profile,
          onPress: () => {},
        },
        nameStatusProps: {
          styleProps: {
            NameStatus: {},
            viewStyle: themes['themeA'].colors01,
          },
          profile,
          status: '',
        },
      }

      return (
        <ButtonYrl {...propsOut.userMenuButtonYrlProps}>
          <AvatarPlusInfo {...propsOut.avatarPlusInfoProps}>
            <NameStatus {...propsOut.nameStatusProps} />
          </AvatarPlusInfo>
        </ButtonYrl>
      )
    })
  }

  const propsOut: ProfileSelectMenuPropsOutType = {}

  return (
    <View
      style={[style.ProfileSelectMenu, styleProps.ProfileSelectMenu]}
      testID='ProfileSelectMenu'
    >
      {getProfilesUserHost(profilesUserHost)}
    </View>
  )
}

export const ProfileSelectMenu = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(
    withParamsMediaYrl(ProfileSelectMenuComponent)
  )
)
