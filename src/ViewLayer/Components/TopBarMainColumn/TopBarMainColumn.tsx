import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'
import { nanoid } from 'nanoid'

import { withDeviceType, mediaParamsDefault } from '../../Hooks/withDeviceType'
import { ButtonYrl } from '../../../YrlNativeViewLibrary/ButtonYrl/ButtonYrl'
import { AvatarPlusInfo } from '../AvatarPlusInfo/AvatarPlusInfo'
import { NameStatus } from '../NameStatus/NameStatus'
import { Text } from '../../Components/Text/Text'
import { themes } from '../../Styles/themes'
import { styles } from './TopBarMainColumnStyle'
import { TopBarMainColumnType } from './TopBarMainColumnType'

/**
 * @import import { TopBarMainColumn } from '../TopBarMainColumn/TopBarMainColumn'
 */
const TopBarMainColumnComponent: TopBarMainColumnType = props => {
  const { user, mediaParams = mediaParamsDefault } = props
  const { deviceType } = mediaParams
  const style = styles[deviceType]
  const { uriAvatar = '', serviceSpecs = [] } = user

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

  const propsOut: Record<string, any> = {
    buttonBackToCards: {
      styleProps: { ButtonYrl: {}, title: {} },
      titleText: '',
      testID: 'ButtonYrl',
      disabled: false,
      onPress: () => {
        console.info('ButtonYrl []', 'click test')
      },
      iconProps: {
        library: 'Ionicons',
        name: 'arrow-back-outline',
        styleProps: { IconYrl: {} },
        size: '1.5rem',
        color: themes['themeA'].colors01.color,
        testID: 'ButtonYrl',
      },
    },
    avatarPlusInfoProps: {
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
    nameStatusProps: {
      styleProps: {
        NameStatus: {},
        viewStyle: themes['themeA'].colors01,
      },
      user,
      status: 'last seen recently',
    },
  }

  return (
    <View style={[style.TopBarMainColumn]} testID='TopBarMainColumn'>
      <View
        style={[style.buttonBackToCardsWrapper]}
        testID='buttonBackToCardsWrapper'
      >
        <ButtonYrl {...propsOut.buttonBackToCards} />
      </View>
      <AvatarPlusInfo {...propsOut.avatarPlusInfoProps}>
        <NameStatus {...propsOut.nameStatusProps} />
      </AvatarPlusInfo>
      <View style={[style.serviceSpec]} testID='serviceSpec'>
        {getStringSpecs(serviceSpecs)}
      </View>
    </View>
  )
}

export const TopBarMainColumn = React.memo(
  withDeviceType(TopBarMainColumnComponent)
)
