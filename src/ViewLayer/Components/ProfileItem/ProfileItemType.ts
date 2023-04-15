import { ReactElement } from 'react'

import { ProfileType } from '../../../@types/ProfileType'

export interface ProfileItemPropsType {
  styleProps?: any
  iconLibrary?: string
  iconName?: string
  contentType?: string
  contentSrc?: string
  content?: string | ReactElement | ReactElement[]
  label: string
  isActive: boolean
}

/**
 * @import import { ProfileItemType } from './ProfileItemType'
 */
export interface ProfileItemType
  extends React.FunctionComponent<ProfileItemPropsType> {
  (props: ProfileItemPropsType): React.ReactElement
}
