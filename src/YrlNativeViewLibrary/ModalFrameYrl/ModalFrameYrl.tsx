import { useRef, useState, useEffect } from 'react'
import { View, SafeAreaView, ImageBackground } from 'react-native'
import { Platform } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
// @ts-ignore
import WebLinearGradient from 'react-native-web-linear-gradient'
import { ModalFrameYrlType } from './ModalFrameYrlType'
import { ModalFrameYrlStyle as style } from './ModalFrameYrlStyle'
import { ButtonYrl } from '../ButtonYrl/ButtonYrl'

const LinearGradientUniPlatform =
  Platform.OS === 'web' ? WebLinearGradient : View // LinearGradient

/**
 * @import import { ModalFrameYrl } from './YrlNativeViewLibrary/ModalFrameYrl/ModalFrameYrl'
 * @import import { ModalFrameYrlPropsType } from './YrlNativeViewLibrary/ModalFrameYrl/ModalFrameYrlType'
 * @links for LinearGradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient
 * @propsOut
  modalFrameYrlProps: {
    styleProps: { ModalFrameYrl: {}, imageBackground: {}, content: {} },
    linearGradientColors: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)'],
    children: <>Your app is rendered ModalFrameYrl default child content</>,
    isShow: false,
    isShowImageBackground: false,
    testID: 'ModalFrameYrl',
    buttonBack: {
      styleProps: { ButtonYrl: {}, title: {} },
      titleText: '',
      testID: 'ModalFrameYrl-buttonBack',
      disabled: false,
      onPress: () => {},
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
      onPress: () => {},
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
    styleProps = {
      ModalFrameYrl: {},
      imageBackground: {},
      content: {},
      buttonBackWrapper: {},
      buttonCloseWrapper: {},
    },
    linearGradientColors = ['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)'],
    children = <>Your app is rendered ModalFrameYrl default child content</>,
    isShow = false,
    isShowImageBackground = false,
    testID = 'ModalFrameYrl',
    buttonBack = {
      styleProps: { ButtonYrl: {}, title: {} },
      titleText: '',
      testID: 'ModalFrameYrl-buttonBack',
      disabled: false,
      onPress: () => {},
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
      onPress: () => {},
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

  const propsOut: Record<string, any> = {
    buttonBackProps: buttonBack,
    buttonCloseProps: buttonClose,
  }

  const handlersAndContentJsx = (
    <>
      {isButtonBack && (
        <View
          style={[style.buttonBackWrapper, styleProps.buttonBackWrapper]}
          testID={'buttonBackWrapper'}
        >
          <ButtonYrl {...propsOut.buttonBackProps} />
        </View>
      )}
      {isButtonClose && (
        <View
          style={[style.buttonCloseWrapper, styleProps.buttonCloseWrapper]}
          testID={'buttonCloseWrapper'}
        >
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
          <LinearGradientUniPlatform
            colors={linearGradientColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            // colors={['#4c669f', '#3b5998', '#192f6a']}
          >
            {handlersAndContentJsx}
          </LinearGradientUniPlatform>
        </ImageBackground>
      ) : (
        handlersAndContentJsx
      )}
    </SafeAreaView>
  )

  return isShow ? modalFrameJsx : null
}
