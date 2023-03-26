import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text } from 'react-native'

import { ProfileType } from './ProfileType'
import { ProfileStyle as style } from './ProfileStyle'

/**
 * @import import { Profile } from '../Components/Profile/Profile'
 */
const ProfileComponent: ProfileType = props => {
  const { styleProps = { Profile: {} } } = props

  const propsOut = {}

  return (
    <View style={[style.Profile, styleProps.Profile]} testID='Profile'>
      My contacts are telephone 415-650-9893, email t3531350@yahoo.com
    </View>
  )
}

export const Profile = React.memo(ProfileComponent)
