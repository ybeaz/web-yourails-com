import { SectionType } from './SectionType'

export type ProjectType = {
  profileID: string | number
  title: string
  contentType: SectionType.ProjectType
  isActive: boolean
  pathname?: string
  subtitle?: string
  description: string | string[]
  customer?: string
  builtwith?: string
  imgSrc: string
  linkHref: string
}
