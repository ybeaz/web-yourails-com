import React from 'react'
import { View } from 'react-native'

import { ContentType, LinkType } from '../../../@types/LinkType'
import { withStoreState } from '../../Hooks/withStoreState'
import {
  withDeviceType,
  mediaParamsDefault,
  DeviceType,
} from '../../Hooks/withDeviceType'
import { ProfileItem } from '../ProfileItem/ProfileItem'
import { ProfileItemPropsType } from '../ProfileItem/ProfileItemType'
import { styles } from './ProfileStyle'
import { ProfileComponentType } from './ProfileComponentType'
import { ProfileType } from '../../../@types/ProfileType'
import { getMessengesString } from '../../../Shared/getMessengesString'

import { links } from '../../../ContentMock/linksMock'
import { profiles } from '../../../ContentMock/profilesMock'

// TODO Refactor wile moving to multiprofile and multiprofiler service
const getProfileItemsObjList = (
  profileIn: ProfileType,
  links: LinkType[],
  style: any,
  deviceType: DeviceType
): ProfileItemPropsType[] => {
  const {
    profilename = '',
    phones = [],
    emails = [],
    messengers = [],
    locations = [],
    summary,
    serviceSpecs = [],
  } = profileIn

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
      content: profilename.toString(),
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
      iconName: 'mail-outline',
      content: emails.join(', '),
      label: 'Email',
      isActive: true,
    },
    ...links,
  ]
}

/**
 * @import import { Profile } from '../Components/Profile/Profile'
 */
const ProfileComponent: ProfileComponentType = props => {
  const {
    styleProps = { Profile: {} },
    mediaParams = mediaParamsDefault,
    store,
  } = props
  const { deviceType } = mediaParams
  const style = styles[deviceType]

  // const store = useSelector((store2: RootStoreType) => store2)
  const {
    globalVars: { idUserHost },
  } = store

  const profile: ProfileType =
    profiles.find(profile => profile.idUser === idUserHost) || profiles[0]

  const profileItems = getProfileItemsObjList(
    profile,
    links,
    style,
    deviceType
  ).filter(profileItemObj => profileItemObj.isActive === true)
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

export const Profile = React.memo(
  withStoreState(withDeviceType(ProfileComponent))
)
