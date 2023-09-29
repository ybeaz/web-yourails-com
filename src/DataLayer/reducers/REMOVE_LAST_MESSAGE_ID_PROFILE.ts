import { ReducerType } from '../../@types/ReducerType'
import { getFilteredLastObjectByIdProfile } from '../../Shared/getFilteredLastObjectByIdProfile'

export const REMOVE_LAST_MESSAGE_ID_PROFILE: ReducerType = (store, data) => {
  const { idProfile } = data

  const { messages } = store
  const messagesNext = getFilteredLastObjectByIdProfile(messages, idProfile)

  return { ...store, messages: messagesNext }
}
