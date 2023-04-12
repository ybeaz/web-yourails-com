import { UseMediaQueryResYrlType } from '../../../YrlNativeViewLibrary/Hooks/useMediaQueryResYrl'
import { RootStoreType } from '../../../@types/RootStoreType'

export interface PageChatsWholeScreenPropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResYrlType
  routeProps?: {
    location: {
      pathname: string
    }
  }
  themeDafault?: string
  store: RootStoreType
}

export interface PageChatsWholeScreenType
  extends React.FunctionComponent<PageChatsWholeScreenPropsType> {
  (props: PageChatsWholeScreenPropsType): React.ReactElement
}
