import { useRef, useState, useEffect } from 'react'
import { View, SafeAreaView, ImageBackground, Dimensions } from 'react-native'
import { ModalFrameYrlType } from './ModalFrameYrlType'
import { ModalFrameYrlStyle as style } from './ModalFrameYrlStyle'
import { ButtonYrl } from '../ButtonYrl/ButtonYrl'

/**
 * @import import { ModalFrameYrl } from './YrlNativeViewLibrary/ModalFrameYrl/ModalFrameYrl'
 * @import import { ModalFrameYrlPropsType } from './YrlNativeViewLibrary/ModalFrameYrl/ModalFrameYrlType'
 * @propsOut
  modalFrameYrlProps: {
    styleProps: { ModalFrameYrl: {}, imageBackground: {}, content: {} },
    children: <>Your app is rendered ModalFrameYrl default child content</>,
    isShow: false,
    isShowImageBackground: false,
    testID: 'ModalFrameYrl',
    buttonBack: {
      styleProps: { ButtonYrl: {}, title: {} },
      titleText: '',
      testID: 'ModalFrameYrl-buttonBack',
      disabled: false,
      onPress: () => {
        console.info('ModalFrameYrl [29]. You have pressed buttonBack-iconBack')
      },
      iconProps: {
        library: 'Ionicons',
        name: 'arrow-back-outline',
        size: '1.5rem',
        color: 'black',
        testID: 'ModalFrameYrl-buttonBack-iconBack',
      },
    },
    buttonClose: {
      styleProps: { ButtonYrl: {}, title: {} },
      titleText: '',
      testID: 'ModalFrameYrl-buttonClose',
      disabled: false,
      onPress: () => {
        console.info(
          'ModalFrameYrl [43]. You have pressed buttonClose-iconClose'
        )
      },
      iconProps: {
        onPress: () => {},
        library: 'Ionicons',
        name: 'close',
        size: '1.5rem',
        color: 'black',
        testID: 'ModalFrameYrl-buttonClose-iconClose',
      },
    },
    imageBackgroundSource: '', // Example: require('../../../Assets/canopy-of-leaves-2.jpg'),
    isButtonBack: true
    isButtonClose: true
  }
 */
export const ModalFrameYrl: ModalFrameYrlType = props => {
  const {
    styleProps = { ModalFrameYrl: {}, imageBackground: {}, content: {} },
    children = <>Your app is rendered ModalFrameYrl default child content</>,
    isShow = false,
    isShowImageBackground = false,
    testID = 'ModalFrameYrl',
    buttonBack = {
      styleProps: { ButtonYrl: {}, title: {} },
      titleText: '',
      testID: 'ModalFrameYrl-buttonBack',
      disabled: false,
      onPress: () => {
        console.info('ModalFrameYrl [29]. You have pressed buttonBack-iconBack')
      },
      iconProps: {
        library: 'Ionicons',
        name: 'arrow-back-outline',
        size: '1.5rem',
        color: 'black',
        testID: 'ModalFrameYrl-buttonBack-iconBack',
      },
    },
    buttonClose = {
      styleProps: { ButtonYrl: {}, title: {} },
      titleText: '',
      testID: 'ModalFrameYrl-buttonClose',
      disabled: false,
      onPress: () => {
        console.info(
          'ModalFrameYrl [43]. You have pressed buttonClose-iconClose'
        )
      },
      iconProps: {
        onPress: () => {},
        library: 'Ionicons',
        name: 'close',
        size: '1.5rem',
        color: 'black',
        testID: 'ModalFrameYrl-buttonClose-iconClose',
      },
    },
    imageBackgroundSource = '',
    isButtonBack = true,
    isButtonClose = true,
  } = props

  const propsOut = {
    buttonBackProps: buttonBack,
    buttonCloseProps: buttonClose,
  }

  const handlersAndContentJsx = (
    <>
      {isButtonBack && (
        <View style={[style.buttonBackWrapper]} testID={'buttonBackWrapper'}>
          <ButtonYrl {...propsOut.buttonBackProps} />
        </View>
      )}
      {isButtonClose && (
        <View style={[style.buttonCloseWrapper]} testID={'buttonCloseWrapper'}>
          <ButtonYrl {...propsOut.buttonCloseProps} />
        </View>
      )}
      <View style={[style.content, styleProps.content]} testID={'content'}>
        {children}
      </View>
    </>
  )

  const modalFrameJsx = (
    <SafeAreaView
      style={[style.ModalFrameYrl, styleProps.ModalFrameYrl]}
      testID={testID}
    >
      {isShowImageBackground ? (
        <ImageBackground
          style={{
            flex: 1,
            zIndex: 10,
            // filter: 'brightness(50%)',
          }}
          source={imageBackgroundSource}
          blurRadius={5}
          resizeMode='repeat'
          imageStyle={[style.imageBackground, styleProps.imageBackground]}
          testID={'ImageBackground'}
        >
          {handlersAndContentJsx}
        </ImageBackground>
      ) : (
        handlersAndContentJsx
      )}
    </SafeAreaView>
  )

  return isShow ? modalFrameJsx : null
}
