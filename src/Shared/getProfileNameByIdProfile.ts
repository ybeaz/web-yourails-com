import { IdUserType } from 'src/@types/UserType'

interface GetProfileNameByIdProfileType {
  (profiles: any[], idProfile: IdUserType): string | undefined
}

/**
 * @description Function to get profileName by idProfile from profiles
 * @import import { getProfileNameByIdProfile } from './shared/getProfileNameByIdProfile'
 */

export const getProfileNameByIdProfile: GetProfileNameByIdProfileType = (
  profiles,
  idProfile
) => profiles.find(profile => profile.idProfile === idProfile)?.profileName
