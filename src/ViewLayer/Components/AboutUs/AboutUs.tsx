import React from 'react'
import { View } from 'react-native'

import {
  withParamsMediaYrl,
  mediaParamsDefault,
} from '../../../YrlNativeViewLibrary'
import { Header } from '../Header/Header'
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

  const { branchCurrent, commit, date, message } = buildData

  const propsOut: AboutUsPropsOutType = {
    header3Props: {
      styleProps: {
        Header: style.header3Header,
        headerText: style.header3HeaderText,
      },
      mediaParams: { deviceType: '' },
    },
    header4Props: {
      styleProps: {
        Header: style.header4Header,
        headerText: style.header4HeaderText,
      },
      mediaParams: { deviceType: '' },
    },
  }

  return (
    <View style={[style.AboutUs, styleProps.AboutUs]} testID='AboutUs'>
      <Header {...propsOut.header3Props}>Current build</Header>
      <Text>
        <Header {...propsOut.header4Props}>branchCurrent</Header>
        {branchCurrent}
      </Text>
      <Text>
        <Header {...propsOut.header4Props}>date</Header>
        {date}
      </Text>
      <Text>
        <Header {...propsOut.header4Props}>commit</Header>
        {commit}
      </Text>
      <Text>
        <Header {...propsOut.header4Props}>message</Header>
        {message}
      </Text>
    </View>
  )
}

export const AboutUs = React.memo(withParamsMediaYrl(AboutUsComponent))
