import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'

import { ProfileItem } from '../ProfileItem/ProfileItem'
import { IconYrl } from '../../../YrlNativeViewLibrary/IconYrl/IconYrl'
import { ProfileStyle as style } from './ProfileStyle'
import { ProfileType } from './ProfileType'
import { Text } from '../Text/Text'
import { themes } from '../../Styles/themes'
import { UserType, MessengerType } from '../../../@types/UserType'

import { users } from '../../../Constants/usersMock'

type ProfileItemType = {
  iconLibrary: string
  iconName: string
  content: string | ReactElement | ReactElement[]
  label: string
}

/**
 * @import import { Profile } from '../Components/Profile/Profile'
 */
const ProfileComponent: ProfileType = props => {
  const { styleProps = { Profile: {} } } = props

  const user: UserType = users[0]
  const {
    username = '',
    phones = [],
    emails = [],
    messengers = [],
    locations = [],
    summary,
  } = user

  const getMessengesString = (messengers: MessengerType[]) =>
    messengers.map((messenger: MessengerType, index: number) => {
      const { name: messengerName, username } = messenger
      return (
        <View
          key={`messenger-${index}`}
          style={[style.messengerView]}
          testID='messengerView'
        >
          <Text style={[style.messengerNameText]} testID='messengerNameText'>
            {messengerName + ' > '}
          </Text>
          <Text style={[style.usernameText]} testID='usernameText'>
            {username}
          </Text>
        </View>
      )
    })

  const profileItems: ProfileItemType[] = [
    {
      iconLibrary: 'Ionicons',
      iconName: 'albums-outline',
      content: summary,
      label: 'Summary',
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'at',
      content: username.toString(),
      label: 'Username',
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'location-outline',
      content: locations.join(', '),
      label: 'Locations',
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'chatbox-ellipses-outline',
      content: getMessengesString(messengers),
      label: 'Messengers',
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'call-outline',
      content: phones.join(', '),
      label: 'Phons',
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'mail-outline',
      content: emails.join(', '),
      label: 'Email',
    },
  ]

  const getProfileItems = (profileItemsIn: ProfileItemType[]) =>
    profileItemsIn.map((profileItemProps: ProfileItemType, index: number) => (
      <ProfileItem key={`profileItem-${index}`} {...profileItemProps} />
    ))

  const propsOut = {}

  return (
    <View style={[style.Profile, styleProps.Profile]} testID='Profile'>
      {getProfileItems(profileItems)}
    </View>
  )
}

export const Profile = React.memo(ProfileComponent)
