import React from 'react'
import {
  Svg,
  Rect,
  Circle,
  SvgXml,
  SvgCss,
  Path,
  Linecap,
} from 'react-native-svg'
import { SvgIconComponentYrlType } from './SvgIconComponentYrlType'

/**
 * @import import { TemplateYrlYrl, TemplateYrlPropsType } from './YrlNativeViewLibrary'
 * @propsOut 
  templateYrlProps: {
  }
 */
export const IonCogOutlineYrl: SvgIconComponentYrlType = ({
  color = '#000',
  size = 24,
  testID = '',
}) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 512 512'>
      <Path
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
        d='M429 285.77a32 32 0 010 45.46l-23.87 23.86a32 32 0 01-45.25 0l-33.94-33.94a131 131 0 01-97.66 0l-33.94 33.94a32 32 0 01-45.25 0l-23.87-23.86a32 32 0 010-45.46l23.87-23.86a32 32 0 0145.25 0l33.94 33.94a131 131 0 0197.66 0l33.94-33.94a32 32 0 0145.25 0l23.87 23.86a32 32 0 010 45.46z'
      />
      <Circle
        cx='256'
        cy='256'
        r='80'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
      />
      <Path
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
        d='M256 160v-16'
      />
      <Path
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
        d='M352 208h16'
      />
      <Path
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
        d='M256 352v16'
      />
      <Path
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='32'
        d='M160 304h-16'
      />
    </Svg>
  )
}
