import { PropsWithChildren } from 'react'
import { ViewStyle } from 'react-native'

export type AnimatedYrlProps = PropsWithChildren<{
  styleProps?: any
  nameHtmlCssAttribute: string
  valueInit: number
  valueTarget: number
  duration: number
  isShow: boolean
  testID?: string
}>

export type AnimatedYrlType = React.FC<AnimatedYrlProps>
