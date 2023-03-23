import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { TopBarChatCardType } from './TopBarChatCardType'
import { TopBarChatCardStyle as style } from './TopBarChatCardStyle'

/**
 * @import import { TopBarChatCard } from '../Components/TopBarChatCard/TopBarChatCard'
 */
export const TopBarChatCardComponent: TopBarChatCardType = props => {
  const { styleProps = { TopBarChatCard: {} } } = props

  const store = useSelector((store2: RootStoreType) => store2)

  const propsOut = {}

  return (
    <View
      style={[style.TopBarChatCard, styleProps.TopBarChatCard]}
      testID='TopBarChatCard'
    >
      null
    </View>
  )
}

export const TopBarChatCard = React.memo(TopBarChatCardComponent)
