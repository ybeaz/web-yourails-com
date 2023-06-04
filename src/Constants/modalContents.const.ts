import { FunctionComponent } from 'react'

import { Portfolio } from '../ViewLayer/Components/Portfolio/Portfolio'
import { Profile } from '../ViewLayer/Components/Profile/Profile'
import { CompetencyTags } from '../ViewLayer/Components/CompetencyTags/CompetencyTags'
import { AwaitView } from '../ViewLayer/Components/AwaitView/AwaitView'

/**
 * @import import { MODAL_CONTENTS, IS_BOTTON_BACK, IS_BOTTON_CLOSE } from '../Constants/modalContents.const'
 */
export const MODAL_CONTENTS: Record<string, FunctionComponent> = {
  Portfolio,
  Profile,
  CompetencyTags,
  AwaitView,
}
