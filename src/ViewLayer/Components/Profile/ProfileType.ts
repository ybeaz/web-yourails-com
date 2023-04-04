export interface ProfilePropsType {
  styleProps?: any
}

/**
 * @import import { ProfileType } from './ProfileType'
 */
export interface ProfileType extends React.FunctionComponent<ProfilePropsType> {
  (props: ProfilePropsType): React.ReactElement
}
