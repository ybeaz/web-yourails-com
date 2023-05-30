import { ProfileType } from '../@types/ProfileType'
import { getProfileUrlFromParams } from './getProfileUrlFromParams'
import { HOST_NAME } from '../Constants/hostname.const'

type GetProfileNameChatPropsType = {
  urlParam1: string | undefined
  urlParam2: string | undefined
  profiles: ProfileType[]
  isHostR1UserToComFlag?: () => boolean
}

interface GetProfileNameChatType {
  (props: GetProfileNameChatPropsType): ProfileType
}
/**
 * @description Function to find a profile based on url params
 * @import import { getProfileChat } from '../../../Shared/getProfileChat'
 */

export const getProfileChat: GetProfileNameChatType = ({
  urlParam1,
  urlParam2,
  profiles,
  isHostR1UserToComFlag = () => false,
}) => {
  let hostname = HOST_NAME
  if (isHostR1UserToComFlag()) hostname = 'r1.userto.com'

  if (hostname === 'r1.userto.com') return profiles[1]

  const profileName: string | undefined = getProfileUrlFromParams(
    urlParam1,
    urlParam2
  )

  let output = undefined
  if (profileName)
    output = profiles.find(
      (profileIn: ProfileType) => profileIn.profileName === profileName
    )

  const output2: ProfileType = output ? output : profiles[0]

  return output2
}
