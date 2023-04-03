import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'
import { nanoid } from 'nanoid'

import { AvatarPlusInfo } from '../AvatarPlusInfo/AvatarPlusInfo'
import { NameStatus } from '../NameStatus/NameStatus'
import { Text } from '../../Components/Text/Text'
import { themes } from '../../Styles/themes'
import { TopBarMainColumnStyle as style } from './TopBarMainColumnStyle'
import { TopBarMainColumnType } from './TopBarMainColumnType'
import { users } from '../../../Constants/usersMock'

/**
 * @import import { TopBarMainColumn } from '../TopBarMainColumn/TopBarMainColumn'
 */
const TopBarMainColumnComponent: TopBarMainColumnType = props => {
  const user = users[0]
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

  const propsOut = {
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
      <AvatarPlusInfo {...propsOut.avatarPlusInfoProps}>
        <NameStatus {...propsOut.nameStatusProps} />
      </AvatarPlusInfo>
      <View style={[style.serviceSpec]} testID='serviceSpec'>
        {getStringSpecs(serviceSpecs)}
      </View>
    </View>
  )
}

export const TopBarMainColumn = React.memo(TopBarMainColumnComponent)
