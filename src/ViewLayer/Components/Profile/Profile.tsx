import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, ImageResizeMode } from 'react-native'

import { ProfileItem } from '../ProfileItem/ProfileItem'
import { ProfileItemPropsType } from '../ProfileItem/ProfileItemType'
import { style } from './ProfileStyle'
import { ProfileType } from './ProfileType'
import { Text } from '../Text/Text'
import { themes } from '../../Styles/themes'
import { UserType, MessengerType } from '../../../@types/UserType'

import { users } from '../../../Constants/usersMock'

// TODO Refactor wile moving to multiuser service
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

// TODO Refactor wile moving to multiuser service
const getProfileItemsObjList = (userIn: UserType): ProfileItemPropsType[] => {
  const {
    username = '',
    phones = [],
    emails = [],
    messengers = [],
    locations = [],
    summary,
  } = userIn

  return [
    {
      iconLibrary: 'Ionicons',
      iconName: 'albums-outline',
      contentType: 'string',
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
      iconName: 'ios-calendar-outline',
      contentType: 'linkHref',
      contentSrc: 'https://calendly.com/romanch',
      content: 'Feel free to setup a phone call',
      label: 'Link',
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'mail-outline',
      content: emails.join(', '),
      label: 'Email',
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'ios-logo-linkedin',
      contentType: 'linkHref',
      contentSrc: 'https://www.linkedin.com/in/romanches',
      content: 'Profile in Linkedin.com',
      label: 'Link',
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'ios-logo-stackoverflow',
      contentType: 'linkHref',
      contentSrc: 'https://stackoverflow.com/users/4791116/roman',
      content: 'Profile in Stackoverflow',
      label: 'Link',
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'ios-logo-github',
      contentType: 'linkHref',
      contentSrc: 'https://github.com/ybeaz',
      content: 'Profile in Github',
      label: 'Link',
    },
    {
      iconLibrary: undefined,
      iconName: undefined,
      contentType: 'imageSrc',
      contentSrc: 'https://r1.userto.com/img/romanChesQrCodeQuietZone00.png',
      content: '',
      label: 'QR code with contacts',
    },
  ]
}

/**
 * @import import { Profile } from '../Components/Profile/Profile'
 */
const ProfileComponent: ProfileType = props => {
  const { styleProps = { Profile: {} } } = props

  const user: UserType = users[0]

  const profileItems = getProfileItemsObjList(user)
  const getProfileItems = (profileItemsIn: ProfileItemPropsType[]) =>
    profileItemsIn.map(
      (profileItemProps: ProfileItemPropsType, index: number) => (
        <ProfileItem key={`profileItem-${index}`} {...profileItemProps} />
      )
    )

  const propsOut = {}

  return (
    <View style={[style.Profile, styleProps.Profile]} testID='Profile'>
      <View style={[style.profileItemsWrapper]} testID='profileItemsWrapper'>
        {getProfileItems(profileItems)}
      </View>
    </View>
  )
}

export const Profile = React.memo(ProfileComponent)
