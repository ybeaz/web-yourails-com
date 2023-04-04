import { UseMediaQueryResType } from '../../Hooks/useMediaQueryRes'

export interface PortfolioPropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResType
}

/**
 * @import import { PortfolioType } from './PortfolioType'
 */
export interface PortfolioType
  extends React.FunctionComponent<PortfolioPropsType> {
  (props: PortfolioPropsType): React.ReactElement
}
