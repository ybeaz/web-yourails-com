import { UseMediaQueryResYrlOutType } from '../../../YrlNativeViewLibrary'
import { RootStoreType } from '../../../@types/RootStoreType'

export interface PortfolioPropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResYrlOutType
  store: RootStoreType
}

/**
 * @import import { PortfolioType } from './PortfolioType'
 */
export interface PortfolioType
  extends React.FunctionComponent<PortfolioPropsType> {
  (props: PortfolioPropsType): React.ReactElement
}
