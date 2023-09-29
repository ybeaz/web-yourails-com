import { IdUserType } from '../../../@types/UserType'
import { ProfileType } from '../../../@types/GraphqlTypes'
import { MessageType } from '../../../@types/MessageType'
import { RootStoreType } from '../../../@types/RootStoreType'

import {
  UrlParamsDefaultType,
  MediaParamsDefaultType,
} from '../../../YrlNativeViewLibrary'

export interface ChatSpacePropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  idProfileHost: IdUserType
  profileActive: ProfileType
  messages: Omit<MessageType, 'position' | 'isTail'>[]
  modalFrame: any
  storeStateSlice: {
    idProfileHost: RootStoreType['globalVars']['idProfileHost']
    idProfileActive: RootStoreType['globalVars']['idProfileActive']
    modalFrame: RootStoreType['componentsState']['modalFrame']
    profiles: RootStoreType['profiles']
    messages: RootStoreType['messages']
  }
  handleEvents: any
}

/**
 * @import import { ChatSpaceType } from './ChatSpaceType'
 */
export interface ChatSpaceType
  extends React.FunctionComponent<ChatSpacePropsType> {
  (props: ChatSpacePropsType): React.ReactElement
}
