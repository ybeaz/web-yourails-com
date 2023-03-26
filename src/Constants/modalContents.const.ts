import { ReactElement } from 'react'

import { Portfolio } from '../ViewLayer/Components/Portfolio/Portfolio'
import { Profile } from '../ViewLayer/Components/Profile/Profile'
import { TagsProperties } from '../ViewLayer/Components/TagsProperties/TagsProperties'

/**
 * @import import { MODAL_CONTENTS } from '../Constants/modalContents.const'
 */
export const MODAL_CONTENTS: Record<string, any> = {
  Portfolio,
  Profile,
  TagsProperties,
}
