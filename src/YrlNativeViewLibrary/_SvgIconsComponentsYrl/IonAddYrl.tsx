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
export const IonAddYrl: SvgIconComponentYrlType = props => {
  const { color = '#000', size = 24, testID = '' } = props

  return (
    <Svg
      // @ts-ignore
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 512 512'
      testID={testID}
    >
      <Line
        x1={256}
        y1={112}
        x2={256}
        y2={400}
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={32}
      />
      <Line
        x1={400}
        y1={256}
        x2={112}
        y2={256}
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={32}
      />
    </Svg>
  )
}
