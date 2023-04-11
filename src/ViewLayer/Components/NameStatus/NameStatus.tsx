import React from 'react'
import { View } from 'react-native'

import { Text } from '../../Components/Text/Text'
import { NameStatusType } from './NameStatusType'
import { style } from './NameStatusStyle'

/**
 * @import import { NameStatus } from '../Components/NameStatus/NameStatus'
 * @propsOut
    nameStatusProps: {
      styleProps: {
        NameStatus: {},
        viewStyle: themes['themeA'].colors07,
      },
      profile,
      status: 'last seen recently',
    },
 */
const NameStatusComponent: NameStatusType = props => {
  const {
    styleProps = { NameStatus: {}, viewStyle: {} },
    profile,
    status,
  } = props
  const { nameFirst, nameLast } = profile

  const propsOut: Record<string, any> = {}

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
