import { ProfileType } from '../@types/ProfileType'

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
  let profileName: string | undefined = undefined
  if (urlParam2 && urlParam2[0] === '@') profileName = urlParam2
  else if (urlParam1 && urlParam1[0] === '@') profileName = urlParam1

  let output = undefined
  if (profileName)
    output = profiles.find(
      (profileIn: ProfileType) => profileIn.profileName === profileName
    )

  return output
}
