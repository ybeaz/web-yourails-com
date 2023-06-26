import { SectionType } from './SectionType'
import { IdUserType } from './UserType'
/**
 * @import import { SectionMappingType } from '../@types/SectionMappingType'
 */

export type SectionMappingType = {
  idProfile: IdUserType
  profileName: string
  contentType: SectionType
  title: string
  pathname: string
  iconLibrary: string
  iconName: string
  iconTitleText: string
  childName: string
}
