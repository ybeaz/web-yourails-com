import { SectionMappingType } from '../@types/SectionMappingType'

type GetComponentNameByUrlParamPropsType = {
  sectionsMappingForProfile: SectionMappingType[]
  urlParam?: string
}

interface GetComponentNameByUrlParamType {
  (props: GetComponentNameByUrlParamPropsType): string
}

/**
 * @description Function to
 * @import import { getComponentNameByUrlParam } from '../../../Shared/getComponentNameByUrlParam'
 */

export const getComponentNameByUrlParam: GetComponentNameByUrlParamType = ({
  sectionsMappingForProfile,
  urlParam,
}) => {
  const founded = sectionsMappingForProfile.find(
    (sectionsMapping: SectionMappingType) =>
      sectionsMapping.pathname === urlParam
  )

  return founded && founded.childName ? founded.childName : 'Profile'
}
