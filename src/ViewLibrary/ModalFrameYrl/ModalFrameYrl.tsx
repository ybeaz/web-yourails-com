import { useRef, useState, useEffect } from 'react'
import { View, ImageBackground, Dimensions } from 'react-native'
import { ModalFrameYrlType } from './ModalFrameYrlType'
import { ModalFrameYrlStyle as style } from './ModalFrameYrlStyle'
import { ButtonYrl } from '../ButtonYrl/ButtonYrl'

/**
 * @import import { ModalFrameYrl } from './ViewLibrary/ModalFrameYrl/ModalFrameYrl'
 * @import import { ModalFrameYrlPropsType } from './ViewLibrary/ModalFrameYrl/ModalFrameYrlType'
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
    imageBackgroundSource: '', // Example: require('../../../Assets/canopy-of-leaves-2.jpg')
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
  } = props

  const heightWindow = Dimensions.get('window').height
  const [heightContent, setHeightContent] = useState(0)
  const [heightImageBackground, setHeightImageBackground] =
    useState(heightWindow)

  const hightModalFrameYrl = useRef(100)

  const numberRendering = useRef(0)

  const onLayoutModalFrameYrl = (event: any) => {
    const { x, y, height, width } = event.nativeEvent.layout
    const heightNext =
      heightImageBackground < height + 16 * (3 + 3)
        ? height + 16 * (3 + 3)
        : heightImageBackground
    hightModalFrameYrl.current =
      numberRendering.current === 0 ? heightNext : hightModalFrameYrl.current
    numberRendering.current = numberRendering.current + 1
  }

  const onLayoutContent = (event: any) => {
    const { x, y, height, width } = event.nativeEvent.layout
    let heightNext = heightImageBackground
    if (heightImageBackground < height + 16 * (3 + 3)) {
      heightNext = height + 16 * (3 + 3)
      setHeightImageBackground(heightNext)
      if (numberRendering.current === 0) {
        heightNext = height + 16 * (3 + 3)
        setHeightContent(heightNext)
      }
    } else if (hightModalFrameYrl.current > height) {
      heightNext = hightModalFrameYrl.current + 16 * (3 + 3)
      setHeightContent(heightNext)
    }

    console.info('ModalFrameYrl [131]', {
      height,
      heightNext,
      heightContent,
      heightImageBackground,
      'hightModalFrameYrl.current': hightModalFrameYrl.current,
    })
  }

  const propsOut = {
    buttonBackProps: buttonBack,
    buttonCloseProps: buttonClose,
  }

  console.info('ModalFrameYrl [136]', {
    heightContent,
    heightImageBackground,
    dimensionsHeight: Dimensions.get('window').height,
  })

  const handlersAndContentJsx = (
    <>
      <View style={[style.buttonBackWrapper]} testID={'buttonBackWrapper'}>
        <ButtonYrl {...propsOut.buttonBackProps} />
      </View>
      <View style={[style.buttonCloseWrapper]} testID={'buttonCloseWrapper'}>
        <ButtonYrl {...propsOut.buttonCloseProps} />
      </View>
      <View
        style={[
          style.content,
          styleProps.content,
          { height: `${heightContent}px` },
        ]}
        testID={'content'}
        onLayout={event => onLayoutContent(event)}
      >
        {children}
      </View>
    </>
  )

  const modalFrameJsx = (
    <View
      style={[style.ModalFrameYrl, styleProps.ModalFrameYrl]}
      onLayout={event => onLayoutModalFrameYrl(event)}
      testID={testID}
    >
      {isShowImageBackground ? (
        <ImageBackground
          style={{
            flex: 1,
            zIndex: 10,
            height: `${heightImageBackground}px`,
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
    </View>
  )

  return isShow ? modalFrameJsx : null
}
