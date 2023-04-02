import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'

import { ProfileType } from './ProfileType'
import { ProfileStyle as style } from './ProfileStyle'
import { Text } from '../Text/Text'

/**
 * @import import { Profile } from '../Components/Profile/Profile'
 */
const ProfileComponent: ProfileType = props => {
  const { styleProps = { Profile: {} } } = props

  const getContent = (num: number) => {
    const repeat = new Array(num).fill(
      'My contacts are telephone 415-650-9893, email t3531350@yahoo.com'
    )
    return repeat.map((item, index) => (
      <Text key={`repeat=${index}`}>
        My contacts are telephone 415-650-9893, email t3531350@yahoo.com
      </Text>
    ))
  }

  const propsOut = {}

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
