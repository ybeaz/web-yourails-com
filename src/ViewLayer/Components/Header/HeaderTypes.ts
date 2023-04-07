import { UseMediaQueryResType } from '../../Hooks/useMediaQueryRes'

export interface HeaderPropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResType
  headerText?: string
}

/**
 * @import import { HeaderType } from './HeaderType'
 */
export interface HeaderType extends React.FunctionComponent<HeaderPropsType> {
  (props: HeaderPropsType): React.ReactElement
}
