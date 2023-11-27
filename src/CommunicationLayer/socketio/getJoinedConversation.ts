import { ProfileType } from '../../@types/GraphqlTypes'
import { getItDelayedBy } from '../../Shared/getItDelayedBy'

type GetJoinedConversationPropsType = {
  profilesIn: ProfileType[]
  profileHostIn: ProfileType
  getSocketEmitJoinConversationIn: (
    profileNameHost: string,
    profileName: string
  ) => void
}

interface GetJoinedConversationType {
  (props: GetJoinedConversationPropsType): Promise<void>
}

/**
 * @description Function to emit join conversation event
 * @import import { getJoinedConversation } from '../../../Shared/getJoinedConversation'
 */

export const getJoinedConversation: GetJoinedConversationType = async ({
  profilesIn,
  profileHostIn,
  getSocketEmitJoinConversationIn,
}) => {
  if (profileHostIn.profileName) {
    for (const profile of profilesIn) {
      if (
        profileHostIn.profileName &&
        profile.profileName &&
        profile.profileName !== '@' &&
        profileHostIn.profileName !== profile.profileName
      ) {
        getSocketEmitJoinConversationIn(
          profileHostIn.profileID,
          profile.profileID
        )
      }
      await getItDelayedBy(10)
    }
  }
}
