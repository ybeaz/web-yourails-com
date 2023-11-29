import { ContentType } from './ContentType'
import { IdUserType } from './UserType'
/**
 * @import import { SectionMappingType } from '../@types/SectionMappingType'
 */

export type SectionMappingType = {
  profileID: IdUserType
  profileName: string
  contentType: ContentType
  title: string
  pathname: string
  iconLibrary: string
  iconName: string
  iconTitleText: string
  childName: string
}
