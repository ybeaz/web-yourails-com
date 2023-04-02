import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'

import { ProfileType } from './ProfileType'
import { ProfileStyle as style } from './ProfileStyle'
import { Text } from '../Text/Text'
import { themes } from '../../Styles/themes'
import { NameCard } from '../NameCard/NameCard'

/**
 * @import import { Profile } from '../Components/Profile/Profile'
 */
const ProfileComponent: ProfileType = props => {
  const {
    styleProps = { Profile: {} },
    // user, // STOPPED HERE
  } = props

  const propsOut = {
    nameCardProps: {
      styleProps: {
        NameStatus: {},
        viewStyle: themes['themeA'].colors07,
      },
      // user,
    },
  }

  return (
    <View style={[style.Profile, styleProps.Profile]} testID='Profile'>
      <View style={[style.rowView]} testID='rowView'>
        <Text style={[style.column1Text]}>Username</Text>
        <Text style={[style.column2Text]}>@rome_sfba</Text>
      </View>
      <View style={[style.rowView]} testID='rowView'>
        <Text style={[style.column1Text]}>Phone</Text>
        <Text style={[style.column2Text]}>415-650-9893</Text>
      </View>
      <View style={[style.rowView]} testID='rowView'>
        <Text style={[style.column1Text]}>Email</Text>
        <Text style={[style.column2Text]}>t3531350@yahoo.com</Text>
      </View>
    </View>
  )
}

export const Profile = React.memo(ProfileComponent)
