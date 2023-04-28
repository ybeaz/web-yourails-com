import { ContentType } from './ContentType'

export type ProjectType = {
  idUser: string | number
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
