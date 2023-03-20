import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { TopBarMainColumnType } from './TopBarMainColumnType'
import { TopBarMainColumnStyle as style } from './TopBarMainColumnStyle'
import { ImageYrl } from '../../../ViewLibrary/ImageYrl/ImageYrl'
import { themes } from '../../Styles/Themes'

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
    TopBarMainColumnStyle: StyleSheet.create({}),
  }

  return (
    <View style={[style.TopBarMainColumn]} testID='TopBarMainColumn'>
      <View style={[style.avatar]} testID='avatar'>
        <ImageYrl {...propsOut.imageYrlProps} />
      </View>
    </View>
  )
}
