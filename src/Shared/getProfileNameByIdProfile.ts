interface GetProfileNameByIdProfileType {
  (profiles: any[], profileName: string | undefined): string | undefined
}

/**
 * @description Function to get profileName by idProfile from profiles
 * @import import { getProfileNameByIdProfile } from './shared/getProfileNameByIdProfile'
 */

export const getProfileNameByIdProfile: GetProfileNameByIdProfileType = (
  profiles,
  idProfile
) => profiles.find(profile => profile.idProfile === idProfile)?.profileName
