export interface PortfolioPropsType {
  styleProps?: any
}

/**
 * @import import { PortfolioType } from './PortfolioType'
 */
export interface PortfolioType
  extends React.FunctionComponent<PortfolioPropsType> {
  (props: PortfolioPropsType): React.ReactElement
}
