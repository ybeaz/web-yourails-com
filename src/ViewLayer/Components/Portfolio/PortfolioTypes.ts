import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'
import { RootStoreType } from '../../../@types/RootStoreType'
import { ElementDimensionsType } from '../../../YrlNativeViewLibrary/Hooks/withElementDimensionsYrl'
import { HandleEventsType } from '../../../DataLayer/index.handleEvents'

export interface PortfolioPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
  store: RootStoreType
  elementDimensions: ElementDimensionsType
  handleEvents: HandleEventsType
}

/**
 * @import import { PortfolioType } from './PortfolioType'
 */
export interface PortfolioType
  extends React.FunctionComponent<PortfolioPropsType> {
  (props: PortfolioPropsType): React.ReactElement
}
