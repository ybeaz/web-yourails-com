import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { AvatarNameStatusType } from './AvatarNameStatusType'
import { AvatarNameStatusStyle as style } from './AvatarNameStatusStyle'
import { ImageYrl } from '../../../ViewLibrary/ImageYrl/ImageYrl'
import { ButtonYrl } from '../../../ViewLibrary/ButtonYrl/ButtonYrl'

/**
 * @import import { AvatarNameStatus } from '../Components/AvatarNameStatus/AvatarNameStatus'
 */
const AvatarNameStatusComponent: AvatarNameStatusType = props => {
  const { user, styleProps = { AvatarNameStatus: {}, viewStyle: {} } } = props
  const { nameFirst, nameLast, uriAvatar = '' } = user

  const store = useSelector((store2: RootStoreType) => store2)

  const nameStatus = (
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
        style={[style.status, styleProps.viewStyle]}
        numberOfLines={1}
        adjustsFontSizeToFit
        testID='status'
      >
        last seen recently
      </Text>
    </View>
  )

  const propsOut = {
    ButtonYrl: {
      titleText: nameStatus,
      styleProps: { ButtonYrl: {}, title: styleProps.viewStyle },
      testID: 'ButtonYrl',
      disabled: false,
      onPress: () => {
        console.info('ChatCard [29]')
      },
      iconProps: undefined,
    },
    imageYrlProps: {
      styleProps: {
        ImageYrl: style.ImageYrl,
        image: style.image,
      },
      testID: 'ChatCard_imageYrl',
      uri: uriAvatar,
    },
  }

  return (
    <View
      style={[
        style.AvatarNameStatus,
        styleProps.AvatarNameStatus,
        styleProps.viewStyle,
      ]}
      testID='AvatarNameStatus'
    >
      <View style={[style.avatar]} testID='avatar'>
        <ImageYrl {...propsOut.imageYrlProps} />
      </View>
      <ButtonYrl {...propsOut.ButtonYrl} />
    </View>
  )
}

export const AvatarNameStatus = React.memo(AvatarNameStatusComponent)
