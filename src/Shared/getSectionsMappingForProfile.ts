import { SectionMappingType } from '../@types/SectionMappingType'

interface GetSectionsMappingForProfileType {
  (
    sectionsMapping: SectionMappingType[],
    profileNameChat: string | undefined
  ): SectionMappingType[]
}

/**
 * @description Function to
 * @import import { getSectionsMappingForProfile } from '../../../Shared/getSectionsMappingForProfile'
 */

export const getSectionsMappingForProfile: GetSectionsMappingForProfileType = (
  sectionsMapping,
  profileNameChat
) => {
  return sectionsMapping.filter(
    (section: SectionMappingType) => section.profileName === profileNameChat
  )
}
