import React from 'react'
import { View } from 'react-native'

import {
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { Text } from '../../Components/Text/Text'
import { HeaderPropsType, HeaderComponentType, HeaderType } from './HeaderTypes'
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
const HeaderComponent: HeaderComponentType = (props: HeaderPropsType) => {
  const {
    styleProps = { Header: {}, headerText: {} },
    mediaParams = mediaParamsDefault,
    headerText = null,
    children = null,
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
        <>
          {headerText}
          {children}
        </>
      </Text>
    </View>
  )
}

export const Header: HeaderType = withParamsMediaYrl(
  React.memo(HeaderComponent)
)

export type { HeaderPropsType, HeaderComponentType, HeaderType }
