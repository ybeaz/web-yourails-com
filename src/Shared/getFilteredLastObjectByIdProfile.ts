interface GetFilteredLastObjectByIdProfileType<T> {
  (arr: T[], idProfileArg: string): T[]
}

/**
 * @description Function to filter the last object with the provided idProfile
 * @import import { getFilteredLastObjectByIdProfile } from '../../../Shared/getFilteredLastObjectByIdProfile'
 */

export const getFilteredLastObjectByIdProfile: GetFilteredLastObjectByIdProfileType<
  any
> = (messages, idProfileArg) => {
  const messagesIdProfile = messages.filter(
    (message: any) => message.idProfile === idProfileArg
  )

  if (messagesIdProfile.length === 0) return messages

  const indexLast = messagesIdProfile.length - 1
  const idMessageLast = messagesIdProfile[indexLast].idMessage

  return messages.filter((message: any) => message.idMessage !== idMessageLast)
}
