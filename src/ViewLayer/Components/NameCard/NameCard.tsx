import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'

import { Text } from '../../Components/Text/Text'
import { NameCardType } from './NameCardType'
import { NameCardStyle as style } from './NameCardStyle'

/**
 * @import import { NameCard } from '../Components/NameCard/NameCard'
 */
const NameCardComponent: NameCardType = props => {
  const { styleProps = { NameCard: {} }, user, status } = props
  const {
    nameFirst,
    nameLast,
    username,
    phones,
    emails,
    locations,
    serviceSpecs,
    summary,
  } = user

  const propsOut = {}

  return (
    <View style={[style.NameCard, styleProps.NameCard]} testID='NameCard'>
      <Text
        style={[style.name, styleProps.viewStyle]}
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
}

export const NameCard = React.memo(NameCardComponent)
