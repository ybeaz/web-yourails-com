import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, ImageResizeMode } from 'react-native'

import {
  withDeviceType,
  mediaParamsDefault,
  DeviceType,
} from '../../Hooks/withDeviceType'
import { ProfileItem } from '../ProfileItem/ProfileItem'
import { ProfileItemPropsType } from '../ProfileItem/ProfileItemType'
import { styles } from './ProfileStyle'
import { ProfileType } from './ProfileType'
import { Text } from '../Text/Text'
import { themes } from '../../Styles/themes'
import { UserType, MessengerType } from '../../../@types/UserType'

import { profiles } from '../../../ContentMock/profilesMock'

// TODO Refactor wile moving to multiuser service
const getMessengesString = (messengers: MessengerType[], style: any) =>
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
const getProfileItemsObjList = (
  userIn: UserType,
  style: any,
  deviceType: DeviceType
): ProfileItemPropsType[] => {
  const {
    username = '',
    phones = [],
    emails = [],
    messengers = [],
    locations = [],
    summary,
    serviceSpecs = [],
  } = userIn

  return [
    {
      iconLibrary: 'Ionicons',
      iconName: 'checkmark-outline',
      contentType: 'string',
      content: serviceSpecs.join(', '),
      label: 'Service specs',
      isActive:
        deviceType === DeviceType['xsDevice'] ||
        deviceType === DeviceType['smDevice']
          ? true
          : false,
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'albums-outline',
      contentType: 'string',
      content: summary,
      label: 'Summary',
      isActive: true,
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'at',
      content: username.toString(),
      label: 'Username',
      isActive: true,
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'location-outline',
      content: locations.join(', '),
      label: 'Locations',
      isActive: true,
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'chatbox-ellipses-outline',
      content: getMessengesString(messengers, style),
      label: 'Messengers',
      isActive: true,
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'call-outline',
      content: phones.join(', '),
      label: 'Phons',
      isActive: true,
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'ios-calendar-outline',
      contentType: 'linkHref',
      contentSrc: 'https://calendly.com/romanch',
      content: 'Feel free to setup a phone call',
      label: 'Link',
      isActive: true,
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'mail-outline',
      content: emails.join(', '),
      label: 'Email',
      isActive: true,
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'ios-logo-linkedin',
      contentType: 'linkHref',
      contentSrc: 'https://www.linkedin.com/in/romanches',
      content: 'Profile in Linkedin.com',
      label: 'Link',
      isActive: true,
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'ios-logo-stackoverflow',
      contentType: 'linkHref',
      contentSrc: 'https://stackoverflow.com/profiles/4791116/roman',
      content: 'Profile in Stackoverflow',
      label: 'Link',
      isActive: true,
    },
    {
      iconLibrary: 'Ionicons',
      iconName: 'ios-logo-github',
      contentType: 'linkHref',
      contentSrc: 'https://github.com/ybeaz',
      content: 'Profile in Github',
      label: 'Link',
      isActive: true,
    },
    {
      iconLibrary: undefined,
      iconName: undefined,
      contentType: 'imageSrc',
      contentSrc: 'https://r1.userto.com/img/romanChesQrCodeQuietZone00.png',
      content: '',
      label: 'QR code with contacts',
      isActive: true,
    },
  ]
}

/**
 * @import import { Profile } from '../Components/Profile/Profile'
 */
const ProfileComponent: ProfileType = props => {
  const { styleProps = { Profile: {} }, mediaParams = mediaParamsDefault } =
    props
  const { deviceType } = mediaParams
  const style = styles[deviceType]

  const user: UserType = profiles[0]

  const profileItems = getProfileItemsObjList(user, style, deviceType).filter(
    profileItemObj => profileItemObj.isActive === true
  )
  const getProfileItems = (profileItemsIn: ProfileItemPropsType[]) =>
    profileItemsIn.map(
      (profileItemProps: ProfileItemPropsType, index: number) => (
        <ProfileItem key={`profileItem-${index}`} {...profileItemProps} />
      )
    )

  const propsOut: Record<string, any> = {}

  return (
    <View style={[style.Profile, styleProps.Profile]} testID='Profile'>
      <View style={[style.profileItemsWrapper]} testID='profileItemsWrapper'>
        {getProfileItems(profileItems)}
      </View>
    </View>
  )
}

export const Profile = React.memo(withDeviceType(ProfileComponent))
