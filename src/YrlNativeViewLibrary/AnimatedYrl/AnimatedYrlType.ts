import { PropsWithChildren } from 'react'
import { ViewStyle } from 'react-native'

export type AnimatedYrlPropsType = PropsWithChildren<{
  styleProps?: any
  isActive?: boolean
  nameHtmlCssAttribute: string
  valueInit: number
  valueTarget: number
  duration: number
  trigger: any
  triggerShouldEqual: any
  testID?: string
}>

export type AnimatedYrlType = React.FC<AnimatedYrlPropsType>
