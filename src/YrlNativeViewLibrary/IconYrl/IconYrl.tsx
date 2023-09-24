import * as React from 'react'
import { IconYrlType, IconYrlPropsOutType } from './IconYrlType'
import { ImageResizeMode } from 'react-native'
import { ImageYrl } from '../ImageYrl/ImageYrl'

/**
 * @import import { IconYrl, IconYrlPropsType } from './YrlNativeViewLibrary'
 * @propsOut 
  iconYrlProps: {
    // || undefined
    isActive: true,
    library: 'Ionicons',
    name: 'send',
    styleProps: { IconYrl: { cursor: 'pointer' } },
    size: getPx('1.5rem'),
    color: themes['themeA'].colors02.color,
    testID: '<entity>_IconYrl_ios_send',
  }
 * @link https://oblador.github.io/react-native-vector-icons/
 */
export const IconYrl: IconYrlType = props => {
  const {
    isActive = true,
    library = '',
    name = '',
    styleProps = { IconYrl: {} },
    size = 24,
    color = '',
    testID = 'IconYrl',
  } = props

  /**
   * @description Changer of the color of svg file with filter params
   * @link https://codepen.io/sosuke/pen/Pjoqqp
   */
  const COLOR_DICT: Record<string, string> = {
    '#3390ec':
      'invert(50%) sepia(82%) saturate(2208%) hue-rotate(189deg) brightness(95%) contrast(95%)',
    '#707579':
      'invert(47%) sepia(9%) saturate(248%) hue-rotate(164deg) brightness(94%) contrast(85%)',
    '#dfe1e5':
      'invert(99%) sepia(1%) saturate(3638%) hue-rotate(181deg) brightness(95%) contrast(88%)',
    '#e6ebee':
      'invert(100%) sepia(1%) saturate(3214%) hue-rotate(170deg) brightness(96%) contrast(93%)',
    '#f5f5f5':
      'invert(100%) sepia(0%) saturate(7438%) hue-rotate(253deg) brightness(116%) contrast(92%)',
    '#192332e6': '',
    '#fcfdfc':
      'invert(100%) sepia(2%) saturate(692%) hue-rotate(353deg) brightness(110%) contrast(98%)',
    '#3f51b5':
      'invert(27%) sepia(64%) saturate(1212%) hue-rotate(207deg) brightness(98%) contrast(95%)',
    '#adb1b5':
      'invert(81%) sepia(6%) saturate(179%) hue-rotate(169deg) brightness(87%) contrast(89%)',
  }

  const filter = COLOR_DICT[color] ? COLOR_DICT[color] : ''

  /* @link: https://github.com/oblador/react-native-vector-icons
   */
  const URI_BASE: Record<string, string> = {
    Ionicons:
      'https://raw.githubusercontent.com/ionic-team/ionicons/main/src/svg',
    MaterialCommunityIcons:
      'https://raw.githubusercontent.com/Templarian/MaterialDesign/master/svg',
  }
  const resizeMode: ImageResizeMode | undefined = 'cover' // 'cover' | 'contain' | 'stretch' | 'repeat' | 'center'

  const propsOut: IconYrlPropsOutType = {
    imageYrlProps: {
      styleProps: {
        ImageYrl: { ...styleProps.IconYrl, filter },
        image: {
          width: size,
          height: size,
        },
      },
      uri: `${URI_BASE[library]}/${name}.svg`,
      resizeMode,
      testID: testID ? testID : `ImageYrl-IconYrl-${name}`,
    },
  }

  return isActive ? <ImageYrl {...propsOut.imageYrlProps} /> : null

  /**
   * @description Snippet allowing to use local svg files for icons 
   *
  const svgAsset = Asset.fromModule(
    require('../../Assets/ionicons/briefcase-outline.svg')
  )

  return (
    <Image source={{ uri: svgAsset.uri }} style={{ width: 24, height: 24 }} />
  )
  */

  /**
   * @description Snippet show how to use @expo/vector-icons/Ionicons package for icons
  import FontAwesome from '@expo/vector-icons/FontAwesome' // 'react-native-vector-icons/FontAwesome'
  import Ionicons from '@expo/vector-icons/Ionicons'
  const FontAwesome = require('@expo/vector-icons/Ionicons').default
  const Ionicons = require('@expo/vector-icons/Ionicons').default

  const ICON: Record<string, any> = {
    FontAwesome,
    Ionicons,
  }

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
  */
}
