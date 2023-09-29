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

  const { branchCurrent, commit, date, message, copyright } = buildData

  const propsOut: AboutUsPropsOutType = {
    header3Props: {
      styleProps: {
        Header: style.header3Header,
        headerText: style.header3HeaderText,
      },
      testID: 'header3',
    },
    header4Props: {
      styleProps: {
        Header: style.header4Header,
        headerText: style.header4HeaderText,
      },
      testID: 'header4',
    },
    textProps: {
      styleProps: {
        Text: style.text,
      },
      testID: 'text',
    },
  }

  return (
    <View style={[style.AboutUs, styleProps.AboutUs]} testID='AboutUs'>
      <Header {...propsOut.header3Props}>Current build</Header>
      <View style={[style.viewWrapper]} testID='viewWrapper'>
        <Header {...propsOut.header4Props}>branchCurrent</Header>
        <Text {...propsOut.textProps}>{branchCurrent}</Text>
      </View>
      <View style={[style.viewWrapper]} testID='viewWrapper'>
        <Header {...propsOut.header4Props}>date</Header>
        <Text {...propsOut.textProps}>{date}</Text>
      </View>
      <View style={[style.viewWrapper]} testID='viewWrapper'>
        <Header {...propsOut.header4Props}>commit</Header>
        <Text {...propsOut.textProps}>{commit}</Text>
      </View>
      <View style={[style.viewWrapper]} testID='viewWrapper'>
        <Header {...propsOut.header4Props}>message</Header>
        <Text {...propsOut.textProps}>{message}</Text>
      </View>
      <View style={[style.viewWrapper]} testID='viewWrapper'>
        <Header {...propsOut.header4Props}></Header>
        <Text {...propsOut.textProps}>{copyright}</Text>
      </View>
    </View>
  )
}

export const AboutUs = React.memo(withParamsMediaYrl(AboutUsComponent))
