export interface CompetencyTagsPropsType {
  styleProps?: any
}

/**
 * @import import { CompetencyTagsType } from './CompetencyTagsType'
 */
export interface CompetencyTagsType
  extends React.FunctionComponent<CompetencyTagsPropsType> {
  (props: CompetencyTagsPropsType): React.ReactElement
}
