import React, { ReactElement } from 'react'
import { View } from 'react-native'

import {
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

  const getUserHostProfiles = (
    profilesUserHostIn: ProfileType[]
  ): ReactElement[] => {
    return profilesUserHostIn.map((profile: ProfileType, index: number) => {
      const { idProfile } = profile
      const propsOut = {
        avatarPlusInfoProps: {
          key: `userHostAvatarPlusInfo-${index}`,
          styleProps: {},
          profile,
          onPress: () =>
            handleEvents.CLICK_ON_HOST_PROFILE_SELECT({}, { idProfile }),
          testID: 'userHostAvatarPlusInfo',
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
        <AvatarPlusInfo {...propsOut.avatarPlusInfoProps}>
          <NameStatus {...propsOut.nameStatusProps} />
        </AvatarPlusInfo>
      )
    })
  }

  const propsOut: ProfileSelectMenuPropsOutType = {}

  return (
    <View
      style={[style.ProfileSelectMenu, styleProps.ProfileSelectMenu]}
      testID='ProfileSelectMenu'
    >
      {getUserHostProfiles(profilesUserHost)}
    </View>
  )
}

export const ProfileSelectMenu = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(
    withParamsMediaYrl(ProfileSelectMenuComponent)
  )
)
