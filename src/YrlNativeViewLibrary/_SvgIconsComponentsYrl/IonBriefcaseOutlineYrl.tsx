import React from 'react'
import {
  Svg,
  Rect,
  Line,
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
export const IonBriefcaseOutlineYrl: SvgIconComponentYrlType = props => {
  const { color = '#000', size = 24, testID = '' } = props

  return (
    <Svg width={size} height={size} viewBox='0 0 512 512'>
      <Rect
        x='32'
        y='128'
        width='448'
        height='320'
        rx='48'
        ry='48'
        stroke='#000'
        strokeWidth='32'
        fill='none'
        strokeLinejoin='round'
      />
      <Path
        d='M144,128V96a32,32,0,0,1,32-32H336a32,32,0,0,1,32,32v32'
        stroke='#000'
        strokeWidth='32'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Line
        x1='480'
        y1='240'
        x2='32'
        y2='240'
        stroke='#000'
        strokeWidth='32'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M320,240v24a8,8,0,0,1-8,8H200a8,8,0,0,1-8-8V240'
        stroke='#000'
        strokeWidth='32'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}
