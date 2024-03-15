import { IdUserType } from 'src/@types/UserType'
import { ProfileType } from 'src/@types/GraphqlTypes'

interface GetProfileNameByIdProfileType {
  (profiles: ProfileType[], profileID: IdUserType): ProfileType
}

/**
 * @description Function to get profileName by profileID from profiles
 * @import import { getProfileByIdProfile } from './Shared/getProfileByIdProfile'
 */

export const getProfileByIdProfile: GetProfileNameByIdProfileType = (
  profiles,
  profileID
) =>
  profiles.find((profile: ProfileType) => profile.profileID === profileID) ||
  profiles[0] || { profileID: '0', profileName: '@', avatarSrc: '' }
