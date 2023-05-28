import React from 'react'
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
