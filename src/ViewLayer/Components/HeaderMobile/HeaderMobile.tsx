import React from 'react'
import { View } from 'react-native'

import {
  withParamsMediaYrl,
  mediaParamsDefault,
  withPropsYrl,
  ButtonYrl,
} from '../../../YrlNativeViewLibrary'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import {
  HeaderMobilePropsType,
  HeaderMobilePropsOutType,
  HeaderMobileComponentType,
  HeaderMobileType,
} from './HeaderMobileTypes'
import { styles } from './HeaderMobileStyles'
import { debugLayout, styleGlobal } from '../../Styles/styleGlobal'

/**
 * @description Component to render
 * @import import { HeaderMobile, HeaderMobilePropsType, HeaderMobilePropsOutType, HeaderMobileType } 
             from '../Components/HeaderMobile/HeaderMobile'
 */
const HeaderMobileComponent: HeaderMobileComponentType = props => {
  const {
    styleProps = { HeaderMobile: {} },
    mediaParams = mediaParamsDefault,
    handleEvents,
  } = props
  const { deviceType, screenCase, width, height } = mediaParams
  const style = styles[deviceType]

  const propsOut: HeaderMobilePropsOutType = {
    buttonBackProps: {
      styleProps: { ButtonYrl: {}, title: {} },
      titleText: 'Back',
      testID: 'buttonBack',
      disabled: false,
      onPress: () => {
        handleEvents?.CLICK_TO_NAVIGATE({}, { screen: 'ChatCardsScreen' })
      },
      iconProps: {
        library: 'Ionicons',
        name: 'chevron-back-outline',
        styleProps: {
          IconYrl: { width: 20, height: 20, ...debugLayout('green') },
        },
        size: 24,
        color: '#3390ec',
        testID: 'buttonBackIcon',
      },
    },
  }

  return (
    <View
      style={[style.HeaderMobile, styleProps.HeaderMobile]}
      testID='HeaderMobile'
    >
      <ButtonYrl {...propsOut.buttonBackProps} />
    </View>
  )
}

export const HeaderMobile: HeaderMobileType = withPropsYrl({
  handleEvents: handleEventsProp,
})(withParamsMediaYrl(React.memo(HeaderMobileComponent)))

export type {
  HeaderMobilePropsType,
  HeaderMobilePropsOutType,
  HeaderMobileComponentType,
  HeaderMobileType,
}
