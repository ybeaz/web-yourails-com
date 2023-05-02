import * as React from 'react'
import { Text, View, Image } from 'react-native'
import { IconYrlType } from './IconYrlType'
// @ts-ignore
// import base64 from 'react-native-base64'
import { IconYrlStyle as style } from './IconYrlStyle'
// import SvgUri from 'react-native-svg-uri'
import {
  Svg,
  Rect,
  Line,
  SvgXml,
  SvgCss,
  Path,
  Linecap,
} from 'react-native-svg'
import { Asset } from 'expo-asset'
import { ImageFromUriYrl } from '../ImageFromUriYrl/ImageFromUriYrl'

// import { IonAddYrl } from '../SvgIconsComponentsYrl/IonAddYrl'
// import { IonCogOutlineYrl } from '../SvgIconsComponentsYrl/IonCogOutlineYrl'
// import { IonBriefcaseOutlineYrl } from '../SvgIconsComponentsYrl/IonBriefcaseOutlineYrl'

const ICON_YRL: Record<string, any> = {
  Ionicons: {
    // add: IonAddYrl,
    // 'briefcase-outline': IonBriefcaseOutlineYrl,
    // 'cog-outline': IonCogOutlineYrl,
  },
}

// import { SvgUri } from 'react-native-svg'

// @ts-ignore
// import Image, { enableWeb } from 'react-native-remote-svg'
// enableWeb()

// import SvgUriYrl from './SvgUriYrl'

import AsyncImage from './AsyncImageYrl'

const DDict: Record<string, any> = {
  Ionicons: {
    plus: 'M256 112v288M400 256H112',
    'briefcase-outline3':
      'M80,176V96a32,32,0,0,1,32-32H400a32,32,0,0,1,32,32v80,M144,128V96a32,32,0,0,1,32-32H336a32,32,0,0,1,32,32v32,M480,240H32,M312, 240v24a8, 8, 0, 0, 1-8, 8H200a8, 8, 0, 0, 1-8 - 8V240',
    'briefcase-outline':
      'M144 128V96a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32M480 240H32M320 240v24a8 8 0 0 1-8 8H200a8 8 0 0 1-8-8v-24',
    'cog-outline':
      'M399.915 246.003L448 256l-48.085 9.997c-2.422 16.22-5.8 32.099-10.102 47.457L429.495 336l-9.68 47.54c-15.546 4.26-31.379 7.642-47.68 10.018L368 448l-9.997-48.085c-16.22-2.422-32.098-5.8-47.457-10.102L176 429.495l-47.54 9.68c-4.26-15.546-7.642-31.379-10.018-47.68L64 368l48.085-9.997c2.422-16.22 5.8-32.099 10.102-47.457L82.505 176l9.68-47.54c15.546-4.26 31.379-7.642 47.68-10.018L144 64l9.997 48.085c16.22 2.422 32.098 5.8 47.457 10.102L336 82.505l47.54-9.68c4.26 15.546 7.642 31.379 10.018 47.68z',
    'person-outline':
      'M256 112c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 32c29.916 0 57.225 12.481 76.642 32.466C317.458 184.776 287.335 192 256 192s-61.458-7.224-76.642-17.534C198.775 156.481 226.084 144 256 144zm-96 256c0-45.465 40.09-82.627 90.609-92.376C231.502 301.153 242.29 304 256 304s24.498-2.847 41.391-8.376C323.91 289.373 364 326.535 364 372v28H160v-28zm219.303-166.639C360.667 242.593 310.028 272 256 272c-54.027 0-104.667-29.407-139.303-78.639C139.362 202.105 145.455 192 256 192s116.638 10.105 139.303 25.361z',
  },
}

/**
 * @import import { IconYrl, IconYrlPropsType } from './YrlNativeViewLibrary'
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
    size = 24,
    color = '',
    testID = 'IconYrl',
    library = '',
  } = props

  // const Icon =
  //   library && name && ICON_YRL[library][name]
  //     ? ICON_YRL[library][name]
  //     : ICON_YRL['Ionicons']['add']

  console.info('IconYrl [45]', {
    svg: require('../../Assets/ionicons/add.svg'),
  })

  return <ImageFromUriYrl />

  // const svgAsset = Asset.fromModule(
  //   require('../../Assets/ionicons/briefcase-outline.svg')
  // )

  // return (
  //   <Image source={{ uri: svgAsset.uri }} style={{ width: 24, height: 24 }} />
  // )

  // return (
  //   <View>
  //     <SvgUri
  //       uri='https://cdn.orsive.com/avatars/3tYL96SMyBcwUakNphevH-avatar.svg'
  //       width={24}
  //       height={24}
  //     />
  //   </View>
  // )

  // return <SvgUriYrl />

  // return <Add width={40} height={40} />

  // /Users/admin/Dev/yourails-sep-web-native/node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf

  // return (
  //   <Image
  //     source={require('../../Assets/ionicons.designerpack/add.svg')}
  //     // style={{ width: 100, height: 100 }}
  //   />
  // )

  // return (
  //   <Image
  //     source={require('../../Assets/ionicons.designerpack/add.svg')}
  //     // style={{ width: 100, height: 100 }}
  //   />

  // return (
  //   <img
  //     src={require('../../Assets/ionicons.designerpack/add.svg').default}
  //     alt='mySvgImage'
  //   />
  // )

  // const svgStr0 =
  //   'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PGxpbmUgeDE9IjI1NiIgeTE9IjExMiIgeDI9IjI1NiIgeTI9IjQwMCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHgiLz48bGluZSB4MT0iNDAwIiB5MT0iMjU2IiB4Mj0iMTEyIiB5Mj0iMjU2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweCIvPjwvc3ZnPg=='

  // const svgStr =
  //   'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PGxpbmUgeDE9IjI1NiIgeTE9IjExMiIgeDI9IjI1NiIgeTI9IjQwMCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLXdpZHRoOjMycHgiLz48bGluZSB4MT0iNDAwIiB5MT0iMjU2IiB4Mj0iMTEyIiB5Mj0iMjU2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MzJweCIvPjwvc3ZnPg=='
  // const svgStrDecoded = base64.decode(svgStr)
  // console.info('IconYrl [45]', {
  //   svgStrDecoded,
  //   svg: require('../../Assets/ionicons/add.svg'),
  // })

  // const finalbase64String = 'data:image/svg+xml;base64,' + svgStrDecoded

  // return (
  //   <SvgUri
  //     width='24'
  //     height='24'
  //     uri={svgStr}
  //     // uri='http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'
  //   />
  // )
  // https://cdn.orsive.com/avatars/3tYL96SMyBcwUakNphevH-avatar.svg

  // return (
  //   <img
  //     src={'https://cdn.orsive.com/avatars/3tYL96SMyBcwUakNphevH-avatar.svg'}
  //   />
  // )

  // return <SvgCss xml={finalbase64String} width='24' height='24' />

  // const propsOut = {
  //   Icon: {
  //     size,
  //     color,
  //   },
  // }

  // return <Icon {...propsOut.Icon} />

  // return (
  //   <Svg {...propsOut.svg}>
  //     {/* @ts-ignore */}
  //     <Path {...propsOut.path} />
  //   </Svg>
  // )

  /*
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
