import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { View, Text } from 'react-native'

import { TopBarChatCardsType } from './TopBarChatCardsType'
import { TopBarChatCardsStyle as style } from './TopBarChatCardsStyle'
import { ButtonYrl } from '../../../ViewLibrary/ButtonYrl/ButtonYrl'
import { InputTextYrl } from '../../../ViewLibrary/InputTextYrl/InputTextYrl'

/**
 * @import import { TopBarChatCards } from '../Components/TopBarChatCards/TopBarChatCards'
 */
export const TopBarChatCardsComponent: TopBarChatCardsType = props => {
  const { styleProps = { TopBarChatCards: {} } } = props

  const propsOut = {
    buttonHamburgerProps: {
      styleProps: { ButtonYrl: {}, title: {} },
      titleText: '',
      testID: 'ButtonYrl',
      disabled: false,
      onPress: () => {},
      iconProps: {
        // || false
        library: '',
        name: '',
        size: 10,
        color: 'red',
        testID: '',
      },
    },
  }

  return (
    <View
      style={[style.TopBarChatCards, styleProps.TopBarChatCards]}
      testID='TopBarChatCards'
    >
      <ButtonYrl {...propsOut.buttonHamburgerProps} />
    </View>
  )
}

export const TopBarChatCards = React.memo(TopBarChatCardsComponent)
