import { ProfileType } from '../@types/GraphqlTypes'
import { getStringFromArrayStrings } from './getStringFromArrayStrings'

interface getProfilesSearchedType {
  (profilesIn: ProfileType[], inputSearchIn: string): ProfileType[]
}

/**
 * @description Function to return profiles that include a string
 * @import import { getProfilesSearched } from '../../../Shared/getProfilesSearched'
 */

export const getProfilesSearched: getProfilesSearchedType = (
  profilesIn,
  inputSearchIn
) => {
  if (!inputSearchIn) return profilesIn

  return profilesIn.filter((profile: ProfileType) => {
    const strToSearch = Object.keys(profile).reduce(
      (accum: string, key: string) => {
        // @ts-ignore
        const item = profile[key]
        if (typeof item === 'string') return `${accum}${item}`
        else if (Array.isArray(item))
          return `${accum}${getStringFromArrayStrings(item)}`
        return accum
      },
      ''
    )

    return strToSearch.toLowerCase().includes(inputSearchIn.toLowerCase())
  })
}
