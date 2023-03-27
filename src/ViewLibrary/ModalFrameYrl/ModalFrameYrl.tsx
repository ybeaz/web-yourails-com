import * as React from 'react'
import { View, ImageBackground } from 'react-native'
import { ModalFrameYrlType } from './ModalFrameYrlType'
import { ModalFrameYrlStyle as style } from './ModalFrameYrlStyle'
import { ButtonYrl } from '../ButtonYrl/ButtonYrl'

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
    isShowImageBackground = false,
    testID = 'ModalFrameYrl',
    iconClose = {
      library: 'Ionicons',
      name: 'close',
      size: '1.5rem',
      color: 'black',
      testID: 'ModalFrameYrl_ButtonYrl_close',
    },
    imageBackgroundSource = '',
  } = props

  console.info('ModalFrameYrl [33]', { imageBackgroundSource })
  const styleShowHide = isShow ? {} : style.hidden

  const propsOut = {
    buttonCloseProps: {
      styleProps: {
        ButtonYrl: {
          cursor: 'pointer',
        },
        title: {},
      },
      titleText: '',
      testID: 'ButtonYrl',
      disabled: false,
      onPress: () => {},
      iconProps: {
        library: 'Ionicons',
        name: 'close',
        size: iconClose.size,
        color: iconClose.color,
        testID: 'ModalFrameYrl_ButtonYrl_close',
      },
    },
  }

  const handlersAndContent = (
    <>
      {' '}
      <View style={[style.buttonCloseWrapper]} testID={'buttonCloseWrapper'}>
        <ButtonYrl {...propsOut.buttonCloseProps} />
      </View>
      <View style={[style.content, styleProps.content]} testID={'content'}>
        {children}
      </View>
    </>
  )

  return (
    <View
      style={[style.ModalFrameYrl, styleShowHide, styleProps.ModalFrameYrl]}
      testID={testID}
    >
      {isShowImageBackground ? (
        <ImageBackground
          style={{
            flex: 1,
            zIndex: 10,
            height: '100%',
            // filter: 'brightness(50%)',
          }}
          source={imageBackgroundSource}
          blurRadius={10}
          resizeMode='repeat'
          testID={'ImageBackground'}
        >
          {handlersAndContent}
        </ImageBackground>
      ) : (
        handlersAndContent
      )}
    </View>
  )
}
