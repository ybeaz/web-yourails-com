import { UseMediaQueryResType } from '../../Hooks/useMediaQueryRes'

export interface ProfilePropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResType
}

/**
 * @import import { ProfileType } from './ProfileType'
 */
export interface ProfileType extends React.FunctionComponent<ProfilePropsType> {
  (props: ProfilePropsType): React.ReactElement
}
