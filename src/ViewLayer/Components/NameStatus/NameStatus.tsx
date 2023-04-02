import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View } from 'react-native'

import { Text } from '../../Components/Text/Text'
import { NameStatusType } from './NameStatusType'
import { NameStatusStyle as style } from './NameStatusStyle'

/**
 * @import import { NameStatus } from '../Components/NameStatus/NameStatus'
 */
const NameStatusComponent: NameStatusType = props => {
  const { styleProps = { NameStatus: {}, viewStyle: {} }, user, status } = props
  const { nameFirst, nameLast } = user

  const propsOut = {}

  return (
    <View style={[style.NameStatus, styleProps.NameStatus]} testID='NameStatus'>
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

export const NameStatus = React.memo(NameStatusComponent)
