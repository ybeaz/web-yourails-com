import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text } from 'react-native'

import { PortfolioType } from './PortfolioType'
import { PortfolioStyle as style } from './PortfolioStyle'

/**
 * @import import { Portfolio } from '../Components/Portfolio/Portfolio'
 */
const PortfolioComponent: PortfolioType = props => {
  const { styleProps = { Portfolio: {} } } = props

  const propsOut = {}

  return (
    <View style={[style.Portfolio, styleProps.Portfolio]} testID='Portfolio'>
      <Text>I have very diverse and rich portfolio!</Text>
    </View>
  )
}

export const Portfolio = React.memo(PortfolioComponent)
