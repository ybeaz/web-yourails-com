export enum SectionType {
  linkHref = 'linkHref',
  imageSrc = 'imageSrc',
}

export type LinkType = {
  idProfile: number | string
  iconLibrary: string | undefined
  iconName: string | undefined
  contentType: SectionType
  contentSrc: string
  content: string
  label: string
  isActive: boolean
}
