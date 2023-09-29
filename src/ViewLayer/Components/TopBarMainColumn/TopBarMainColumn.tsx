import React from 'react'
import { View } from 'react-native'
import { v4 as uuid } from 'uuid'

import { ProfileType } from '../../../@types/GraphqlTypes'

import {
  withStoreStateYrl,
  withParamsMediaYrl,
  mediaParamsDefault,
  DeviceType,
  ButtonYrl,
} from '../../../YrlNativeViewLibrary'

import { AvatarPlusInfo } from '../AvatarPlusInfo/AvatarPlusInfo'
import { NameStatus } from '../NameStatus/NameStatus'
import { Text } from '../../Components/Text/Text'
import { themes } from '../../Styles/themes'
import { styles } from './TopBarMainColumnStyle'
import { TopBarMainColumnType } from './TopBarMainColumnType'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { getProfileByIdProfile } from '../../../Shared/getProfileByIdProfile'

/**
 * @import import { TopBarMainColumn } from '../TopBarMainColumn/TopBarMainColumn'
 */
const TopBarMainColumnComponent: TopBarMainColumnType = props => {
  const { mediaParams = mediaParamsDefault, store } = props
  const { deviceType } = mediaParams

  const {
    profiles,
    componentsState,
    globalVars: { idProfileActive },
  } = store
  const { modalFrame } = componentsState

  const {
    isShow: isShowModalFrame,
    childName: childNameModal,
    isButtonBack: isButtonBackModal,
    isButtonClose: isButtonCloseModal,
  } = modalFrame

  const style = styles[deviceType]

  const profileActive: ProfileType = getProfileByIdProfile(
    profiles,
    idProfileActive
  )

  const { avatarSrc, serviceSpecs } = profileActive

  const isButtonBackTopBarMainColumn =
    isButtonBackModal && isButtonCloseModal ? true : false
  let isButtonBackToCard = isButtonBackTopBarMainColumn
  if (
    deviceType === DeviceType['mdDevice'] ||
    deviceType === DeviceType['lgDevice'] ||
    deviceType === DeviceType['xlDevice']
  ) {
    isButtonBackToCard = false
  }

  const isImageAvatar =
    childNameModal === 'Profile' && isShowModalFrame === true ? false : true

  const getStringSpecs = (serviceSpecsIn: string[] = []) => {
    return serviceSpecsIn.map((serviceSpec: string, index: number) => {
      const key = uuid()
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

  const propsOut: Record<string, any> = {
    buttonBackToCards: {
      styleProps: { ButtonYrl: {}, title: {} },
      titleText: '',
      testID: 'ButtonYrl',
      disabled: false,
      onPress: () => {
        handleEvents.CLICK_TOGGLE_SIDEBAR_MAIN(
          {},
          { deviceType, from: 'TopBarMainColumn.tsx' }
        )
      },
      iconProps: {
        library: 'Ionicons',
        name: 'arrow-back-outline',
        styleProps: { IconYrl: {} },
        size: 24,
        color: themes['themeA'].colors01.color,
        testID: 'ButtonYrl',
      },
    },
    avatarPlusInfoProps: {
      profile: profileActive,
      styleProps: {
        viewStyle: themes['themeA'].colors01,
        avatar: { opacity: isImageAvatar ? 1 : 0 },
      },
      onPress: (event: any) =>
        handleEvents.SET_MODAL_FRAME(event, {
          childName: 'Profile',
          isShow: true,
          childProps: {},
        }),
      isImageAvatar: true,
    },
    imageYrlProps: {
      styleProps: {
        ImageYrl: style.ImageYrl,
        image: style.image,
      },
      testID: 'TopBarMainColumn_imageYrl',
      uri: avatarSrc,
    },
    nameStatusProps: {
      styleProps: {
        NameStatus: {},
        viewStyle: themes['themeA'].colors01,
      },
      profile: profileActive,
      status: 'last seen recently',
    },
  }

  return (
    <View style={[style.TopBarMainColumn]} testID='TopBarMainColumn'>
      {isButtonBackToCard && (
        <View
          style={[style.buttonBackToCardsWrapper]}
          testID='buttonBackToCardsWrapper'
        >
          <ButtonYrl {...propsOut.buttonBackToCards} />
        </View>
      )}
      <AvatarPlusInfo {...propsOut.avatarPlusInfoProps}>
        <NameStatus {...propsOut.nameStatusProps} />
      </AvatarPlusInfo>
      {(deviceType === DeviceType['mdDevice'] ||
        deviceType === DeviceType['lgDevice'] ||
        deviceType === DeviceType['xlDevice']) && (
        <View style={[style.serviceSpec]} testID='serviceSpec'>
          {getStringSpecs(serviceSpecs || undefined)}
        </View>
      )}
    </View>
  )
}

export const TopBarMainColumn = React.memo(
  withStoreStateYrl(withParamsMediaYrl(TopBarMainColumnComponent))
)
