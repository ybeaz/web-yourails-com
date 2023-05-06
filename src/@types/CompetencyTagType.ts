import { ContentType } from './ContentType'

export type CompetencyTagType = {
  idProfile: string
  title: string
  contentType: ContentType.CompetencyTagType
  section?: string
  linkHref: string
  tooltips: string
  iconLibrary?: string
  iconName?: string
  iconSize?: number
}
