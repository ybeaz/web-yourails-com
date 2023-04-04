import {
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native'
import { LightboxProps } from 'react-native-lightbox-v2'

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

export interface LeftRightStyle<T> {
  left?: StyleProp<T>
  right?: StyleProp<T>
}
type renderFunction = (x: any) => JSX.Element
export interface User {
  _id: string | number
  name?: string
  avatar?: string | number | renderFunction
}

export interface Reply {
  title: string
  value: string
  messageId?: any
}

export interface QuickReplies {
  type: 'radio' | 'checkbox'
  values: Reply[]
  keepIt?: boolean
}

export interface IMessage {
  _id: string | number
  text: string
  createdAt: Date | number
  user: User
  image?: string
  video?: string
  audio?: string
  system?: boolean
  sent?: boolean
  received?: boolean
  pending?: boolean
  quickReplies?: QuickReplies
}

export type IChatMessage = IMessage

export interface MessageVideoProps<TMessage extends IMessage> {
  currentMessage?: TMessage
  containerStyle?: StyleProp<ViewStyle>
  videoStyle?: StyleProp<ViewStyle>
  videoProps?: object
  lightboxProps?: LightboxProps
}

export interface MessageAudioProps<TMessage extends IMessage> {
  currentMessage?: TMessage
  containerStyle?: StyleProp<ViewStyle>
  audioStyle?: StyleProp<ViewStyle>
  audioProps?: object
}
