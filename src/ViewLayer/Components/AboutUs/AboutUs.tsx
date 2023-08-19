import React from 'react'
import { View } from 'react-native'

import {
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { Text } from '../../Components/Text/Text'
import { AboutUsType, AboutUsPropsOutType } from './AboutUsTypes'
import { buildData } from '../../../Constants/buildData.const'
import { styles } from './AboutUsStyles'

/**
 * @description Component to render
 * @import import { AboutUs } from '../Components/AboutUs/AboutUs'
 */
const AboutUsComponent: AboutUsType = props => {
  const { styleProps = { AboutUs: {} }, mediaParams = mediaParamsDefault } =
    props
  const { deviceType, screenCase, width, height } = mediaParams
  const style = styles[deviceType]

  const { commit, date, message } = buildData

  const propsOut: AboutUsPropsOutType = {}

  return (
    <View style={[style.AboutUs, styleProps.AboutUs]} testID='AboutUs'>
      <Text>Current build</Text>
      <Text>date {date}</Text>
      <Text>commit {commit}</Text>
      <Text>message {message}</Text>
    </View>
  )
}

export const AboutUs = React.memo(withParamsMediaYrl(AboutUsComponent))
