import { CompetencyTagType } from '../@types/CompetencyTagType'

import { competencyTags01R } from './competencyTags01RMock'
import { competencyTags02D } from './competencyTags02DMock'

export const competencyTags: CompetencyTagType[] = [
  ...competencyTags01R,
  ...competencyTags02D,
]
