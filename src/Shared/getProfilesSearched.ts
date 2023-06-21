import { ProfileType } from '../@types/ProfileType'
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
  return profilesIn.filter((profile: ProfileType) => {
    const {
      idProfile,
      idUser,
      contacts,
      emails,
      locations,
      nameFirst,
      nameLast,
      phones,
      serviceSections,
      serviceSpecs,
      summary,
    } = profile

    const contactsStr = getStringFromArrayStrings(contacts)
    const emailsStr = getStringFromArrayStrings(emails)
    const locationsStr = getStringFromArrayStrings(locations)
    const phonesStr = getStringFromArrayStrings(phones)
    const serviceSectionsStr = getStringFromArrayStrings(serviceSections)
    const serviceSpecsStr = getStringFromArrayStrings(serviceSpecs)
    const strToSearch = `${idProfile}${idUser}${contactsStr}${emailsStr}${locationsStr}${nameFirst}${nameLast}${phonesStr}${serviceSectionsStr}${serviceSpecsStr}${summary}`

    return strToSearch.toLowerCase().includes(inputSearchIn)
  })
}
