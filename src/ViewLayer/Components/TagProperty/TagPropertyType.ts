export interface TagPropertyPropsType {
  styleProps?: any
  title: string
  testID?: string
}

/**
 * @import import { TagPropertyType } from './TagPropertyType'
 */
export interface TagPropertyType
  extends React.FunctionComponent<TagPropertyPropsType> {
  (props: TagPropertyPropsType): React.ReactElement
}
