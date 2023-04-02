import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'

import { NameCard } from '../NameCard/NameCard'
import { IconYrl } from '../../../YrlNativeViewLibrary/IconYrl/IconYrl'
import { ProfileStyle as style } from './ProfileStyle'
import { ProfileType } from './ProfileType'
import { Text } from '../Text/Text'
import { themes } from '../../Styles/themes'
import { UserType, MessengerType } from '../../../@types/UserType'

import { users } from '../../../Constants/usersMock'

/**
 * @import import { Profile } from '../Components/Profile/Profile'
 */
const ProfileComponent: ProfileType = props => {
  const {
    styleProps = { Profile: {} },
    // user, // STOPPED HERE
  } = props

  const user: UserType = users[0]
  const {
    id,
    nameFirst,
    nameLast,
    uriAvatar = '',
    serviceSpecs = [],
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

  const profileItems = [
    {
      iconLibrary: 'Ionicons',
      iconName: 'albums-outline',
      content: summary,
      label: 'Summary',
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'at',
      content: username,
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

  const ProfileItem = ({
    id,
    iconLibrary,
    iconName,
    content,
    label,
  }: {
    id: string
    iconLibrary: string
    iconName: string
    content: string
    label: string
  }): ReactElement => {
    const propsOut = {
      iconPhoneProps: {
        library: iconLibrary,
        name: iconName,
        styleProps: { IconYrl: { cursor: 'pointer' } },
        size: '1.5rem',
        color: themes['themeA'].colors01.color,
        testID: `${label.toLowerCase()}_IconYrl_ios_send`,
      },
    }
    return (
      <View key={id} style={[style.rowView]} testID='rowView'>
        <View style={[style.column1]} testID='rowView'>
          <IconYrl {...propsOut.iconPhoneProps} />
        </View>
        <View style={[style.column2]} testID='column2'>
          <Text style={[style.content]}>{content}</Text>
          <Text
            style={[style.label, { color: themes['themeA'].colors05.color }]}
          >
            {label}
          </Text>
        </View>
      </View>
    )
  }

  const propsOut = {
    // nameCardProps: {
    //   styleProps: {
    //     NameStatus: {},
    //     viewStyle: themes['themeA'].colors01,
    //   },
    //   user,
    //   status: '',
    // },
    iconPhoneProps: {
      library: 'Ionicons',
      name: 'call-outline',
      styleProps: { IconYrl: { cursor: 'pointer' } },
      size: '1.5rem',
      color: themes['themeA'].colors01.color,
      testID: '<entity>_IconYrl_ios_send',
    },
  }

  return (
    <View style={[style.Profile, styleProps.Profile]} testID='Profile'>
      {/* <NameCard {...propsOut.nameCardProps} /> */}

      {/* <View style={[style.rowView]} testID='rowView'>
        <Text style={[style.column1Text]}>Summary</Text>
        <Text style={[style.column2Text]}>{summary}</Text>
      </View>
      <View style={[style.rowView]} testID='rowView'>
        <Text style={[style.column1Text]}>Username</Text>
        <Text style={[style.column2Text]}>{username}</Text>
      </View>
      <View style={[style.rowView]} testID='rowView'>
        <Text style={[style.column1Text]}>Locations</Text>
        <Text style={[style.column2Text]}>{locations.join(', ')}</Text>
      </View>
      <View style={[style.rowView]} testID='rowView'>
        <Text style={[style.column1Text]}>Messenger</Text>
        <Text style={[style.column2Text]}>{getMessengesString}</Text>
      </View> */}
      {profileItems.map((profileItemProps: any, index: number) => (
        <ProfileItem {...profileItemProps} />
      ))}
      {/* </View> */}
      {/* <View style={[style.rowView]} testID='rowView'>
        <Text style={[style.column1Text]}>Email</Text>
        <Text style={[style.column2Text]}>{emails.join(', ')}</Text>
      </View> */}
    </View>
  )
}

export const Profile = React.memo(ProfileComponent)
