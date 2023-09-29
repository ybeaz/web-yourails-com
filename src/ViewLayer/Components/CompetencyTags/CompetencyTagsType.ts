import { RootStoreType } from '../../../@types/RootStoreType'
import { HandleEventsType } from '../../../DataLayer/index.handleEvents'

export interface CompetencyTagsPropsType {
  styleProps?: any
  store: RootStoreType
  handleEvents: HandleEventsType
}

/**
 * @import import { CompetencyTagsType } from './CompetencyTagsType'
 */
export interface CompetencyTagsType
  extends React.FunctionComponent<CompetencyTagsPropsType> {
  (props: CompetencyTagsPropsType): React.ReactElement
}
