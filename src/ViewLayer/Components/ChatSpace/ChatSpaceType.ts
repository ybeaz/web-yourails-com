import { IdUserType } from '../../../@types/UserType'
import { ProfileType } from '../../../@types/GraphqlTypes'
import { MessageType } from '../../../@types/MessageType'
import { RootStoreType } from '../../../@types/RootStoreType'
import {
  MediaParamsDefaultType,
  PlatformOSYrlType,
} from '../../../YrlNativeViewLibrary'

export interface ChatSpacePropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  profileHostID: IdUserType
  profileActive: ProfileType
  messages: Omit<MessageType, 'position' | 'isTail'>[]
  modalFrame: any
  storeStateSlice: {
    profileHostID: RootStoreType['globalVars']['profileHostID']
    profileActiveID: RootStoreType['globalVars']['profileActiveID']
    modalFrame: RootStoreType['componentsState']['modalFrame']
    profiles: RootStoreType['profiles']
    messages: RootStoreType['messages']
  }
  handleEvents: any
  platformOS: PlatformOSYrlType
}

/**
 * @import import { ChatSpaceType } from './ChatSpaceType'
 */
export interface ChatSpaceType
  extends React.FunctionComponent<ChatSpacePropsType> {
  (props: ChatSpacePropsType): React.ReactElement
}
