export interface TagsPropertiesPropsType {
  styleProps?: any
}

/**
 * @import import { TagsPropertiesType } from './TagsPropertiesType'
 */
export interface TagsPropertiesType
  extends React.FunctionComponent<TagsPropertiesPropsType> {
  (props: TagsPropertiesPropsType): React.ReactElement
}
