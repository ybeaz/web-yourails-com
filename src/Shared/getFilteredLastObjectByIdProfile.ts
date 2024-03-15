interface GetFilteredLastObjectByIdProfileType<T> {
  (arr: T[], idProfileArg: string): T[]
}

/**
 * @description Function to filter the last object with the provided profileID
 * @import import { getFilteredLastObjectByIdProfile } from '../../../Shared/getFilteredLastObjectByIdProfile'
 */

export const getFilteredLastObjectByIdProfile: GetFilteredLastObjectByIdProfileType<
  any
> = (messages, idProfileArg) => {
  const messagesIdProfile = messages.filter(
    (message: any) => message.profileID === idProfileArg
  )

  if (messagesIdProfile.length === 0) return messages

  const indexLast = messagesIdProfile.length - 1
  const messageIDLast = messagesIdProfile[indexLast].messageID

  return messages.filter((message: any) => message.messageID !== messageIDLast)
}
