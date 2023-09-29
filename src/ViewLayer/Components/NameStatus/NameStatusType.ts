import { ProfileType } from '../../../@types/GraphqlTypes'
import { IconYrlPropsType } from '../../../YrlNativeViewLibrary'

export interface NameStatusPropsType {
  styleProps?: any
  profile: ProfileType
  status: string
}

export type NameStatusPropsOutType = {
  iconProfileNatureProps: IconYrlPropsType
}

/**
 * @import import { NameStatusType } from './NameStatusType'
 */
export interface NameStatusComponentType
  extends React.FunctionComponent<NameStatusPropsType> {
  (props: NameStatusPropsType): React.ReactElement
}

export type NameStatusType = React.NamedExoticComponent<any>
