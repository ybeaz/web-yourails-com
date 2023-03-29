import React, { useRef } from 'react'
import { View } from 'react-native'
import { AnimatedYrlType } from './AnimatedYrlType'
import { AnimatedYrlStyle as style } from './AnimatedYrlStyle'
import { useAnimatedYrl } from '../Hooks/useAnimatedYrl'
/**
 * @import import { AnimatedYrl } from './ViewLibrary/AnimatedYrl/AnimatedYrl'
 * @import import { AnimatedYrlPropsType } from './ViewLibrary/AnimatedYrl/AnimatedYrlType'
 * @propsOut 
  AnimatedYrlProps: {
    valueInit: 0,
    valueTarget: 1,
    nameHtmlCssAttribute: 'opacity',
    duration: 1000,
    isShow: false,
  }
 */
export const AnimatedYrl: AnimatedYrlType = props => {
  const {
    styleProps = { AnimatedYrl: {} },
    valueInit,
    valueTarget,
    nameHtmlCssAttribute,
    duration,
    isShow,
    testID = 'AnimatedYrl',
  } = props
  const fadeInViewRef = useRef(null)

  const animatedYrlProps = {
    ref: fadeInViewRef,
    valueInit,
    valueTarget,
    nameHtmlCssAttribute,
    duration,
    isShow,
  }
  useAnimatedYrl(animatedYrlProps)

  return (
    <View
      style={[style.AnimatedYrl, styleProps.AnimatedYrl]}
      testID={testID}
      ref={fadeInViewRef}
    >
      {props.children}
    </View>
  )
}
