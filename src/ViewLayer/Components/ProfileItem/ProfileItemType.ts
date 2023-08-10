import { ReactElement } from 'react'

export interface ProfileItemPropsType {
  styleProps?: any
  iconLibrary?: string
  iconName?: string
  contentType?: string
  contentSrc?: string
  content?: null | string | ReactElement | ReactElement[]
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
