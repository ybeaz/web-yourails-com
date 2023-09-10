import { IdUserType } from '../../../@types/UserType'
import { MessageEventType } from '../../../@types/MessageEventType'

import { TriangleCornerPropsType } from '../TriangleCorner/TriangleCorner'
import {
  ImageYrlPropsType,
  MediaParamsDefaultType,
} from '../../../YrlNativeViewLibrary'
import { CopyThisPropsType } from '../CopyThis/CopyThis'

export type MessagePropsType = {
  idMessage?: string
  idProfile: IdUserType
  eventType: MessageEventType
  text: string
  createdAt?: number
  position?: string
  isTail?: boolean
  image?: string
  video?: string
  audio?: string
  isSystem?: boolean
  isSent?: boolean
  isReceived?: boolean
  isPending?: boolean
  imagePendingSrc?: string
  mediaParams?: MediaParamsDefaultType
}

export type MessagePropsOutType = {
  pendingImageYrlProps: ImageYrlPropsType
  triangleCornerProps: TriangleCornerPropsType
  copyThisProps: CopyThisPropsType
}

/**
 * @import import { MessageType } from './MessageType'
 */
export interface MessageComponentType
  extends React.FunctionComponent<MessagePropsType> {
  (props: MessagePropsType): React.ReactElement
}

export type MessageType = React.FunctionComponent<MessagePropsType>
