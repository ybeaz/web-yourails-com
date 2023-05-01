import { ContentSectionType } from '../@types/ContentSectionType'

import { competencyTags } from './competencyTagsMock'
import { projects } from './projectsMock'

export const contentSections: ContentSectionType[] = [
  ...competencyTags,
  ...projects,
]
