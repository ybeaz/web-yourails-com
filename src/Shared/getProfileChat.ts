import { ProfileType } from '../@types/ProfileType'
import { getProfileUrlFromParams } from './getProfileUrlFromParams'

type GetProfileNameChatPropsType = {
  urlParam1: string | undefined
  urlParam2: string | undefined
  profiles: ProfileType[]
}

interface GetProfileNameChatType {
  (props: GetProfileNameChatPropsType): ProfileType | undefined
}
/**
 * @description Function to find a profile based on url params
 * @import import { getProfileChat } from '../../../Shared/getProfileChat'
 */

export const getProfileChat: GetProfileNameChatType = ({
  urlParam1,
  urlParam2,
  profiles,
}) => {
  const profileName: string | undefined = getProfileUrlFromParams(
    urlParam1,
    urlParam2
  )

  let output = undefined
  if (profileName)
    output = profiles.find(
      (profileIn: ProfileType) => profileIn.profileName === profileName
    )

  return output
}
