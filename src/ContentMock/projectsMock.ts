import { ProjectType } from '../@types/ProjectType'

import { projects01R } from './projects01RMock'
import { projects02D } from './projects02DMock'

export const projects: ProjectType[] = [...projects01R, ...projects02D]
