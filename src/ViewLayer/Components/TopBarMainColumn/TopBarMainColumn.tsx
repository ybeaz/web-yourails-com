import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { nanoid } from 'nanoid'

import { useSelector, useDispatch } from 'react-redux'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { TopBarMainColumnType } from './TopBarMainColumnType'
import { TopBarMainColumnStyle as style } from './TopBarMainColumnStyle'
import { ImageYrl } from '../../../ViewLibrary/ImageYrl/ImageYrl'
import { themes } from '../../Styles/themes'
import { users } from '../../../Constants/usersMock'

/**
 * @import import { TopBarMainColumn } from '../TopBarMainColumn/TopBarMainColumn'
 */
export const TopBarMainColumn: TopBarMainColumnType = props => {
  const store = useSelector((store2: RootStoreType) => store2)
  const {
    id,
    nameFirst,
    nameLast,
    uriAvatar = '',
    serviceSpecs = [],
    locations = [],
  } = users[0]

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
    <View
      style={[style.TopBarMainColumn, themes['themeA'].colors01]}
      testID='TopBarMainColumn'
    >
      <View style={[style.avatar]} testID='avatar'>
        <ImageYrl {...propsOut.imageYrlProps} />
      </View>
      <View style={[style.nameStatus]} testID='nameStatus'>
        <Text
          style={[style.name]}
          numberOfLines={1}
          adjustsFontSizeToFit
          testID='name'
        >
          {`${nameFirst} ${nameLast}`}
        </Text>
        <Text
          style={[style.status, themes['themeA'].colors05]}
          numberOfLines={1}
          adjustsFontSizeToFit
          testID='status'
        >
          last seen recently
        </Text>
      </View>
      <View style={[style.serviceSpec]} testID='serviceSpec'>
        {getStringSpecs(serviceSpecs)}
      </View>
      <View style={[style.serviceSpec]} testID='serviceSpec'>
        {getStringSpecs(locations)}
      </View>
    </View>
  )
}
