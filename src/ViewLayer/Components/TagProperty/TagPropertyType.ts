import {
  IconYrlPropsType,
  ButtonYrlPropsType,
  TooltipYrlPropsType,
} from '../../../YrlNativeViewLibrary/'
import { CompetencyTagType } from '../../../@types/GraphqlTypes'
import { TextPropsType } from '../Text/Text'

export type TagPropertyPropsType = {
  key: string
  styleProps?: any
  title: CompetencyTagType['title']
  linkHref: CompetencyTagType['linkHref']
  tooltips: CompetencyTagType['tooltips']
  iconLibrary: CompetencyTagType['iconLibrary']
  iconName: CompetencyTagType['iconName']
  testID?: string
}

export type TagPropertyPropsOutM1Type = {
  tooltipsLinkingButtonYrlProps: ButtonYrlPropsType
  tooltipsTextProps: TextPropsType
  iconProps: IconYrlPropsType
}

export type TagPropertyPropsOutType = {
  tooltipYrlProps: TooltipYrlPropsType
}

/**
 * @import import { TagPropertyType } from './TagPropertyType'
 */
export interface TagPropertyType
  extends React.FunctionComponent<TagPropertyPropsType> {
  (props: TagPropertyPropsType): React.ReactElement
}
