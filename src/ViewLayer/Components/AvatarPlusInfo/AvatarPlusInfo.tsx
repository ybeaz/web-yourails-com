import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'

import { Text } from '../../Components/Text/Text'
import { AvatarPlusInfoType } from './AvatarPlusInfoType'
import { style } from './AvatarPlusInfoStyle'
import { ImageYrl } from '../../../YrlNativeViewLibrary/ImageYrl/ImageYrl'
import { ButtonYrl } from '../../../YrlNativeViewLibrary/ButtonYrl/ButtonYrl'

/**
 * @import import { AvatarPlusInfo } from '../Components/AvatarPlusInfo/AvatarPlusInfo'
 * @propsOut
    avatarPlusInfoProps: {
      user,
      styleProps: {
        viewStyle: themes['themeA'].colors07,
      },
    },
 */
const AvatarPlusInfoComponent: AvatarPlusInfoType = props => {
  const {
    styleProps = { AvatarPlusInfo: {}, viewStyle: {} },
    user,
    children,
  } = props
  const { uriAvatar = '' } = user

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
      // titleText: nameStatus,
      styleProps: { ButtonYrl: {} },
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
        style.AvatarPlusInfo,
        styleProps.AvatarPlusInfo,
        styleProps.viewStyle,
      ]}
      testID='AvatarPlusInfo'
    >
      <ButtonYrl {...propsOut.ButtonYrl}>
        <>
          <View style={[style.avatar]} testID='avatar'>
            <ImageYrl {...propsOut.imageYrlProps} />
          </View>
          {children}
        </>
      </ButtonYrl>
    </View>
  )
}

export const AvatarPlusInfo = React.memo(AvatarPlusInfoComponent)
