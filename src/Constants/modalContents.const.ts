import { FunctionComponent } from 'react'

import { Portfolio } from '../ViewLayer/Components/Portfolio/Portfolio'
import { Profile } from '../ViewLayer/Components/Profile/Profile'
import { CompetencyTags } from '../ViewLayer/Components/CompetencyTags/CompetencyTags'
import { AwaitView } from '../ViewLayer/Components/AwaitView/AwaitView'
import { AboutUs } from '../ViewLayer/Components/AboutUs/AboutUs'

/**
 * @import import { MODAL_CONTENTS, IS_BOTTON_BACK, IS_BOTTON_CLOSE } from '../Constants/modalContents.const'
 */
export const MODAL_CONTENTS: Record<string, FunctionComponent> = {
  AboutUs,
  Portfolio,
  Profile,
  CompetencyTags,
  AwaitView,
}
