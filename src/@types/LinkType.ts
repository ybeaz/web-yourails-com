export enum ContentType {
  linkHref = 'linkHref',
  imageSrc = 'imageSrc',
}

export type LinkType = {
  idProfile: number | string
  iconLibrary: string | undefined
  iconName: string | undefined
  contentType: ContentType
  contentSrc: string
  content: string
  label: string
  isActive: boolean
}
