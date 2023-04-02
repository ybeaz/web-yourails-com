import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'

import { AvatarPlusInfo } from '../AvatarPlusInfo/AvatarPlusInfo'
import { NameCard } from '../NameCard/NameCard'
import { ProfileStyle as style } from './ProfileStyle'
import { ProfileType } from './ProfileType'
import { Text } from '../Text/Text'
import { themes } from '../../Styles/themes'

import { users } from '../../../Constants/usersMock'

/**
 * @import import { Profile } from '../Components/Profile/Profile'
 */
const ProfileComponent: ProfileType = props => {
  const {
    styleProps = { Profile: {} },
    // user, // STOPPED HERE
  } = props

  const user = users[0]
  const {
    id,
    nameFirst,
    nameLast,
    uriAvatar = '',
    serviceSpecs = [],
    username = '',
    phone = '',
    email = '',
    locations = [],
  } = user

  const propsOut = {
    avatarPlusInfoProps: {
      user,
      styleProps: {
        viewStyle: themes['themeA'].colors01,
      },
    },
    // nameCardProps: {
    //   styleProps: {
    //     NameStatus: {},
    //     viewStyle: themes['themeA'].colors01,
    //   },
    //   user,
    //   status: '',
    // },
  }

  return (
    <View style={[style.Profile, styleProps.Profile]} testID='Profile'>
      {/* <NameCard {...propsOut.nameCardProps} /> */}

      <View style={[style.rowView]} testID='rowView'>
        <Text style={[style.column1Text]}>Username</Text>
        <Text style={[style.column2Text]}>{username}</Text>
      </View>
      <View style={[style.rowView]} testID='rowView'>
        <Text style={[style.column1Text]}>Locations</Text>
        <Text style={[style.column2Text]}>{locations.join(' ')}</Text>
      </View>
      <View style={[style.rowView]} testID='rowView'>
        <Text style={[style.column1Text]}>Phone</Text>
        <Text style={[style.column2Text]}>{phone}</Text>
      </View>
      <View style={[style.rowView]} testID='rowView'>
        <Text style={[style.column1Text]}>Email</Text>
        <Text style={[style.column2Text]}>{email}</Text>
      </View>
    </View>
  )
}

export const Profile = React.memo(ProfileComponent)
