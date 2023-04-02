import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'

import { IconYrl } from '../../../YrlNativeViewLibrary/IconYrl/IconYrl'
import { Text } from '../../Components/Text/Text'
import { ProfileItemType } from './ProfileItemType'
import { ProfileItemStyle as style } from './ProfileItemStyle'
import { themes } from '../../Styles/themes'

/**
 * @import import { ProfileItem } from '../Components/ProfileItem/ProfileItem'
 */
const ProfileItemComponent: ProfileItemType = props => {
  const {
    styleProps = { ProfileItem: {} },
    iconLibrary,
    iconName,
    content,
    label,
  } = props

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
    <View style={[style.rowView]} testID='rowView'>
      <View style={[style.column1]} testID='rowView'>
        <IconYrl {...propsOut.iconPhoneProps} />
      </View>
      <View style={[style.column2]} testID='column2'>
        <Text style={[style.content]}>{content}</Text>
        <Text style={[style.label, { color: themes['themeA'].colors05.color }]}>
          {label}
        </Text>
      </View>
    </View>
  )
}

export const ProfileItem = React.memo(ProfileItemComponent)
