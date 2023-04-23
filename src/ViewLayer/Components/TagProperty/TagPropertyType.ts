export interface TagPropertyPropsType {
  styleProps?: any
  id?: string
  title: string
  linkHref: string
  tooltips: string
  iconLibrary?: string
  iconName?: string
  testID?: string
}

/**
 * @import import { TagPropertyType } from './TagPropertyType'
 */
export interface TagPropertyType
  extends React.FunctionComponent<TagPropertyPropsType> {
  (props: TagPropertyPropsType): React.ReactElement
}
