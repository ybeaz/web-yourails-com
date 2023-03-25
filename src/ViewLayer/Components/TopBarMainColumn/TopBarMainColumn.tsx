import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { nanoid } from 'nanoid'

import { TopBarMainColumnType } from './TopBarMainColumnType'
import { TopBarMainColumnStyle as style } from './TopBarMainColumnStyle'
import { themes } from '../../Styles/themes'
import { users } from '../../../Constants/usersMock'
import { AvatarNameStatus } from '../AvatarNameStatus/AvatarNameStatus'

/**
 * @import import { TopBarMainColumn } from '../TopBarMainColumn/TopBarMainColumn'
 */
const TopBarMainColumnComponent: TopBarMainColumnType = props => {
  const user = users[0]
  const {
    id,
    nameFirst,
    nameLast,
    uriAvatar = '',
    serviceSpecs = [],
    telephone = '',
    email = '',
    locations = [],
    contacts = [],
  } = user

  const getStringSpecs = (serviceSpecsIn: string[]) => {
    return serviceSpecsIn.map((serviceSpec: string, index: number) => {
      const key = nanoid()
      return (
        <Text
          key={key}
          style={[style.serviceSpecText]}
          numberOfLines={1}
          adjustsFontSizeToFit
          testID={`${serviceSpec}-${index}`}
        >
          {serviceSpec}
        </Text>
      )
    })
  }

  const propsOut = {
    avatarNameStatusProps: {
      user,
      styleProps: {
        viewStyle: themes['themeA'].colors01,
      },
    },
    imageYrlProps: {
      styleProps: {
        ImageYrl: style.ImageYrl,
        image: style.image,
      },
      testID: 'TopBarMainColumn_imageYrl',
      uri: uriAvatar,
    },
  }

  return (
    <View style={[style.TopBarMainColumn]} testID='TopBarMainColumn'>
      <AvatarNameStatus {...propsOut.avatarNameStatusProps} />
      <View style={[style.serviceSpec]} testID='serviceSpec'>
        {getStringSpecs(serviceSpecs)}
      </View>
      <View style={[style.serviceSpec]} testID='serviceSpec'>
        {getStringSpecs(locations)}
      </View>
      <View style={[style.serviceSpec]} testID='serviceSpec'>
        {getStringSpecs(contacts)}
      </View>
    </View>
  )
}

export const TopBarMainColumn = React.memo(TopBarMainColumnComponent)
