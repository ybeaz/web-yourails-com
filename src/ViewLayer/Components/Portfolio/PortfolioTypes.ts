import { UseMediaQueryResYrlOutType } from '../../../YrlNativeViewLibrary'
import { RootStoreType } from '../../../@types/RootStoreType'
import { ElementDimensionsType } from '../../../YrlNativeViewLibrary/Hooks/withElementDimensionsYrl'

export interface PortfolioPropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResYrlOutType
  store: RootStoreType
  elementDimensions: ElementDimensionsType
}

/**
 * @import import { PortfolioType } from './PortfolioType'
 */
export interface PortfolioType
  extends React.FunctionComponent<PortfolioPropsType> {
  (props: PortfolioPropsType): React.ReactElement
}
