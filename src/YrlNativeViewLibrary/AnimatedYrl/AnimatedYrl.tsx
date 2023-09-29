import React, { useRef } from 'react'
import { View } from 'react-native'
import { AnimatedYrlType } from './AnimatedYrlType'
import { AnimatedYrlStyle as style } from './AnimatedYrlStyle'
import { useAnimatedYrl } from '../Hooks/useAnimatedYrl'
/**
 * @import import { AnimatedYrl, AnimatedYrlPropsType } from './YrlNativeViewLibrary'
 * @propsOut 
  AnimatedYrlProps: {
    styleProps: { AnimatedYrl: { } },
    isActive: true,
    valueInit: 0,
    valueTarget: 1,
    nameHtmlCssAttribute: 'opacity',
    duration: 1000,
    trigger: <variable>,
    triggerShouldEqual: true,
    testID: 'sidebarRightIn_animatedYrl_OuterOut',
  }
 */
export const AnimatedYrl: AnimatedYrlType = props => {
  const {
    styleProps = { AnimatedYrl: {} },
    isActive = true,
    valueInit,
    valueTarget,
    nameHtmlCssAttribute,
    duration,
    trigger,
    triggerShouldEqual,
    testID = 'AnimatedYrl',
  } = props
  const fadeInViewRef = useRef(null)

  const animatedYrlProps = {
    ref: fadeInViewRef,
    isActive,
    valueInit,
    valueTarget,
    nameHtmlCssAttribute,
    duration,
    trigger,
    triggerShouldEqual,
    testID,
  }
  isActive && useAnimatedYrl(animatedYrlProps)

  return (
    <View
      style={[
        style.AnimatedYrl,
        styleProps.AnimatedYrl,
        { [nameHtmlCssAttribute]: isActive ? valueInit : valueTarget },
      ]}
      testID={testID}
      ref={fadeInViewRef}
    >
      {props.children}
    </View>
  )
}
