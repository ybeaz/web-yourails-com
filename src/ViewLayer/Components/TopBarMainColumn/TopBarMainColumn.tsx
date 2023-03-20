import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { TopBarMainColumnType } from './TopBarMainColumnType'
import { TopBarMainColumnStyle as style } from './TopBarMainColumnStyle'
import { ImageYrl } from '../../../ViewLibrary/ImageYrl/ImageYrl'
import { themes } from '../../Styles/themes'

/**
 * @import import { TopBarMainColumn } from '../TopBarMainColumn/TopBarMainColumn'
 */
export const TopBarMainColumn: TopBarMainColumnType = props => {
  const store = useSelector((store2: RootStoreType) => store2)

  const propsOut = {
    imageYrlProps: {
      styleProps: {
        ImageYrl: style.ImageYrl,
        image: style.image,
      },
      testID: 'TopBarMainColumn_imageYrl',
      uri: 'https://yourails.com/images/_VVS3415-crop-4k.jpg',
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
          Roman Cheskidov
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
        <Text
          style={[style.serviceSpecText]}
          numberOfLines={1}
          adjustsFontSizeToFit
          testID='serviceSpecText1'
        >
          Full Stack Developer
        </Text>
        <Text
          style={[style.serviceSpecText]}
          numberOfLines={1}
          adjustsFontSizeToFit
          testID='serviceSpecText2'
        >
          Machine Learning Engineer
        </Text>
      </View>
      <View style={[style.serviceSpec]} testID='serviceSpec'>
        <Text
          style={[style.serviceSpecText]}
          numberOfLines={1}
          adjustsFontSizeToFit
          testID='serviceSpecText1'
        >
          Remote
        </Text>
        <Text
          style={[style.serviceSpecText]}
          numberOfLines={1}
          adjustsFontSizeToFit
          testID='serviceSpecText2'
        >
          San Francisco, CA
        </Text>
      </View>
    </View>
  )
}
