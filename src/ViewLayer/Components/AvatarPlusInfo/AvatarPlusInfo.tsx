import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'

import { Text } from '../../Components/Text/Text'
import { AvatarPlusInfoType } from './AvatarPlusInfoType'
import { AvatarPlusInfoStyle as style } from './AvatarPlusInfoStyle'
import { ImageYrl } from '../../../YrlNativeViewLibrary/ImageYrl/ImageYrl'
import { ButtonYrl } from '../../../YrlNativeViewLibrary/ButtonYrl/ButtonYrl'

/**
 * @import import { AvatarPlusInfo } from '../Components/AvatarPlusInfo/AvatarPlusInfo'
 */
const AvatarPlusInfoComponent: AvatarPlusInfoType = props => {
  const {
    styleProps = { AvatarPlusInfo: {}, viewStyle: {} },
    user,
    children,
  } = props
  const { uriAvatar = '' } = user

  // const NameStatus = () => (
  //   <View style={[style.nameStatus]} testID='nameStatus'>
  //     <Text
  //       style={[style.name, styleProps.viewStyle]}
  //       numberOfLines={1}
  //       adjustsFontSizeToFit
  //       testID='name'
  //     >
  //       {`${nameFirst} ${nameLast}`}
  //     </Text>
  //     <Text
  //       style={[style.status, styleProps.viewStyle]}
  //       numberOfLines={1}
  //       adjustsFontSizeToFit
  //       testID='status'
  //     >
  //       {status}
  //     </Text>
  //   </View>
  // )

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
