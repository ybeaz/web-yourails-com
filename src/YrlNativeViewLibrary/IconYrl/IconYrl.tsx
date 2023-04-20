import * as React from 'react'
import { IconYrlType } from './IconYrlType'
import { IconYrlStyle as style } from './IconYrlStyle'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
// const FontAwesome = require('react-native-vector-icons/FontAwesome')
// const Ionicons = require('react-native-vector-icons/Ionicons')

const ICON: Record<string, any> = {
  FontAwesome,
  Ionicons,
}

/**
 * @import import { IconYrl } from './YrlNativeViewLibrary/IconYrl/IconYrl'
 * @import import { ButtonYrlPropsType } from './YrlNativeViewLibrary/IconYrl/IconYrlType'
 * @propsOut 
  iconYrlProps: {
    // || undefined
    library: 'Ionicons',
    name: 'ios-send',
    styleProps: { IconYrl: { cursor: 'pointer' } },
    size: '1.5rem',
    color: themes['themeA'].colors02.color,
    testID: '<entity>_IconYrl_ios_send',
  }
 * @link https://oblador.github.io/react-native-vector-icons/
 */
export const IconYrl: IconYrlType = props => {
  const {
    name = '',
    styleProps = { IconYrl: {} },
    size = '',
    color = '',
    testID = 'IconYrl',
    library = '',
  } = props
  const Icon = library ? ICON[library] : null

  return (
    <Icon
      name={name}
      style={[style.IconYrl, styleProps.IconYrl]}
      size={size}
      color={color}
      testID={testID}
    />
  )
}
