import { RootStoreType } from '../../../@types/RootStoreType'

export interface CompetencyTagsPropsType {
  styleProps?: any
  store: RootStoreType
}

/**
 * @import import { CompetencyTagsType } from './CompetencyTagsType'
 */
export interface CompetencyTagsType
  extends React.FunctionComponent<CompetencyTagsPropsType> {
  (props: CompetencyTagsPropsType): React.ReactElement
}
