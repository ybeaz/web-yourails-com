import { SectionType } from './SectionType'

export type CompetencyTagType = {
  idProfile: string
  title: string
  contentType: SectionType.CompetencyTagType
  section?: string
  linkHref: string
  tooltips: string
  iconLibrary?: string
  iconName?: string
  iconSize?: number
}
