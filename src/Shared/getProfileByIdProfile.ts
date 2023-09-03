import { IdUserType } from 'src/@types/UserType'
import { ProfileType } from 'src/@types/GraphqlTypes'

interface GetProfileNameByIdProfileType {
  (profiles: ProfileType[], idProfile: IdUserType): ProfileType
}

/**
 * @description Function to get profileName by idProfile from profiles
 * @import import { getProfileByIdProfile } from './Shared/getProfileByIdProfile'
 */

export const getProfileByIdProfile: GetProfileNameByIdProfileType = (
  profiles,
  idProfile
) =>
  profiles.find((profile: ProfileType) => profile.idProfile === idProfile) ||
  profiles[0] || { idProfile: '0', profileName: '@', avatarSrc: '' }
