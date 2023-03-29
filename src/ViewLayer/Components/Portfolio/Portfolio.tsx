import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { SafeAreaView, View, Text } from 'react-native'

import { PortfolioType } from './PortfolioType'
import { PortfolioStyle as style } from './PortfolioStyle'

/**
 * @import import { Portfolio } from '../Components/Portfolio/Portfolio'
 */
const PortfolioComponent: PortfolioType = props => {
  const { styleProps = { Portfolio: {} } } = props

  const propsOut = {}

  return (
    <SafeAreaView
      style={[style.Portfolio, styleProps.Portfolio]}
      testID='Portfolio'
    >
      <View style={[style.viewPadding]} testID='viewPadding'>
        <Text>I have very diverse and rich portfolio!</Text>
      </View>
    </SafeAreaView>
  )
}

export const Portfolio = React.memo(PortfolioComponent)
