import * as React from 'react'
import { View } from 'react-native'
import { ModalFrameYrlType } from './ModalFrameYrlType'
import { ModalFrameYrlStyle as style } from './ModalFrameYrlStyle'

/**
 * @import import { ModalFrameYrl } from './ViewLibrary/ModalFrameYrl/ModalFrameYrl'
 * @import import { ModalFrameYrlPropsType } from './ViewLibrary/ModalFrameYrl/ModalFrameYrlType'
 * @propsOut 
  modalFrameYrlProps: {
    styleProps: { ModalFrameYrl: {}, content: {} },
    children: <></>,
    testID: 'ModalFrameYrl'
  }
 */
export const ModalFrameYrl: ModalFrameYrlType = props => {
  const {
    styleProps = { ModalFrameYrl: {}, content: {} },
    children = <>I am not I and the horse is not mine</>,
    isShow = false,
    testID = 'ModalFrameYrl',
  } = props

  const styleShowHide = isShow ? {} : style.hidden

  return (
    <View
      style={[style.ModalFrameYrl, styleShowHide, styleProps.ModalFrameYrl]}
      testID={testID}
    >
      <View style={[style.content, styleProps.content]} testID={'content'}>
        {children}
      </View>
    </View>
  )
}
