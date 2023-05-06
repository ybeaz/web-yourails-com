import { ContentType } from './ContentType'

export type ProjectType = {
  idProfile: string | number
  title: string
  contentType: ContentType.ProjectType
  isActive: boolean
  pathname?: string
  subtitle?: string
  description: string | string[]
  customer?: string
  builtwith?: string
  imgSrc: string
  linkHref: string
}
