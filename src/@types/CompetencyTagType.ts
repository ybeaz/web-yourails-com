export type CompetencyTagType = {
  title: string
  section?: string
  linkHref: string
  tooltips: string
}

export type CompetencyTagsObjType = Record<string, CompetencyTagType[]>
