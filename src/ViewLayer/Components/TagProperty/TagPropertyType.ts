import {
  IconYrlPropsType,
  ButtonYrlPropsType,
} from '../../../YrlNativeViewLibrary/'
import { TooltipPopoverPropsOutType } from '../TooltipPopover/TooltipPopover'
import { TextPropsType } from '../Text/Text'

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

export type TagPropertyPropsOutM1Type = {
  tooltipsLinkingButtonYrlProps: ButtonYrlPropsType
  tooltipsTextProps: TextPropsType
}

export type TagPropertyPropsOutType = {
  tooltipPopoverProps: TooltipPopoverPropsOutType
  iconProps: IconYrlPropsType
}

/**
 * @import import { TagPropertyType } from './TagPropertyType'
 */
export interface TagPropertyType
  extends React.FunctionComponent<TagPropertyPropsType> {
  (props: TagPropertyPropsType): React.ReactElement
}
