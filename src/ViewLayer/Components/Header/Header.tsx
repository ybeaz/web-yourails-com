import React from 'react'
import { View } from 'react-native'

import {
  withDeviceTypeYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { Text } from '../../Components/Text/Text'
import { HeaderType } from './HeaderTypes'
import { styles } from './HeaderStyles'

/**
 * @import import { Header } from '../Components/Header/Header'
 * @propsOut
{
    styleProps: { Header: {}, headerText: {} },
    mediaParams: { deviceType: '' },
    headerText: ''
}
 */
const HeaderComponent: HeaderType = props => {
  const {
    styleProps = { Header: {}, headerText: {} },
    mediaParams = mediaParamsDefault,
    headerText,
  } = props
  const { deviceType } = mediaParams
  const style = styles[deviceType]

  const propsOut: Record<string, any> = {}

  return (
    <View style={[style.Header, styleProps.Header]} testID='Header'>
      <Text
        style={[style.headerText, styleProps.headerText]}
        testID='headerText'
      >
        {headerText}
      </Text>
    </View>
  )
}

export const Header = React.memo(withDeviceTypeYrl(HeaderComponent))
