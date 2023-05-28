import React from 'react'
import { View } from 'react-native'

import {
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { Text } from '../../Components/Text/Text'
import {
  ProfileSelectMenuType,
  ProfileSelectMenuPropsOutType,
} from './ProfileSelectMenuTypes'
import { styles } from './ProfileSelectMenuStyles'

/**
 * @import import { ProfileSelectMenu } from '../Components/ProfileSelectMenu/ProfileSelectMenu'
 */
const ProfileSelectMenuComponent: ProfileSelectMenuType = props => {
  const {
    styleProps = { ProfileSelectMenu: {} },
    mediaParams = mediaParamsDefault,
  } = props
  const { deviceType, screenCase, width, height } = mediaParams
  const style = styles[deviceType]

  const propsOut: ProfileSelectMenuPropsOutType = {}

  return (
    <View
      style={[style.ProfileSelectMenu, styleProps.ProfileSelectMenu]}
      testID='ProfileSelectMenu'
    >
      <>123</>
    </View>
  )
}

export const ProfileSelectMenu = React.memo(
  withParamsMediaYrl(ProfileSelectMenuComponent)
)
