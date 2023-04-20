import React from 'react'
import { View } from 'react-native'

import { AvatarPlusInfoType } from './AvatarPlusInfoType'
import { style } from './AvatarPlusInfoStyle'
import { ImageYrl } from '../../../YrlNativeViewLibrary'
import { ButtonYrl } from '../../../YrlNativeViewLibrary'

/**
 * @import import { AvatarPlusInfo } from '../Components/AvatarPlusInfo/AvatarPlusInfo'
 * @propsOut
    avatarPlusInfoProps: {
      profile,
      styleProps: {
        viewStyle: themes['themeA'].colors07,
      },
    },
 */
const AvatarPlusInfoComponent: AvatarPlusInfoType = props => {
  const {
    styleProps = { AvatarPlusInfo: {}, viewStyle: {}, avatar: {} },
    onPress = () => {},
    profile,
    isImageAvatar = true,
    children,
  } = props
  const { uriAvatar = '' } = profile

  const propsOut: Record<string, any> = {
    imageYrlProps: {
      styleProps: {
        ImageYrl: style.ImageYrl,
        image: style.image,
      },
      resizeMode: 'cover',
      testID: 'ChatCard_imageYrl',
      uri: uriAvatar,
    },
    ButtonYrl: {
      // titleText: nameStatus,
      styleProps: { ButtonYrl: {} },
      testID: 'ButtonYrl',
      disabled: false,
      onPress,
      iconProps: undefined,
    },
  }

  return (
    <View
      style={[style.AvatarPlusInfo, styleProps.AvatarPlusInfo]}
      testID='AvatarPlusInfo'
    >
      <ButtonYrl {...propsOut.ButtonYrl}>
        <>
          {isImageAvatar && (
            <View style={[style.avatar, styleProps.avatar]} testID='avatar'>
              <ImageYrl {...propsOut.imageYrlProps} />
            </View>
          )}
          {children}
        </>
      </ButtonYrl>
    </View>
  )
}

export const AvatarPlusInfo = React.memo(AvatarPlusInfoComponent)
