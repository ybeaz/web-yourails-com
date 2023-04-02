import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'

import { Text } from '../../Components/Text/Text'
import { AvatarNameStatusType } from './AvatarNameStatusType'
import { AvatarNameStatusStyle as style } from './AvatarNameStatusStyle'
import { ImageYrl } from '../../../YrlNativeViewLibrary/ImageYrl/ImageYrl'
import { ButtonYrl } from '../../../YrlNativeViewLibrary/ButtonYrl/ButtonYrl'

/**
 * @import import { AvatarNameStatus } from '../Components/AvatarNameStatus/AvatarNameStatus'
 */
const AvatarNameStatusComponent: AvatarNameStatusType = props => {
  const {
    user,
    styleProps = { AvatarNameStatus: {}, viewStyle: {} },
    status,
  } = props
  const { nameFirst, nameLast, uriAvatar = '' } = user

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
        {status}
      </Text>
    </View>
  )

  const propsOut = {
    imageYrlProps: {
      styleProps: {
        ImageYrl: style.ImageYrl,
        image: style.image,
      },
      testID: 'ChatCard_imageYrl',
      uri: uriAvatar,
    },
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
