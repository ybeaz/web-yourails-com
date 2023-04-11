import { ReactElement } from 'react'

import { Portfolio } from '../ViewLayer/Components/Portfolio/Portfolio'
import { Profile } from '../ViewLayer/Components/Profile/Profile'
import { CompetencyTags } from '../ViewLayer/Components/CompetencyTags/CompetencyTags'

/**
 * @import import { MODAL_CONTENTS, IS_BOTTON_BACK, IS_BOTTON_CLOSE } from '../Constants/modalContents.const'
 */
export const MODAL_CONTENTS: Record<string, any> = {
  Portfolio,
  Profile,
  CompetencyTags,
}

export const IS_BOTTON_BACK: boolean = true
export const IS_BOTTON_CLOSE: boolean = true
