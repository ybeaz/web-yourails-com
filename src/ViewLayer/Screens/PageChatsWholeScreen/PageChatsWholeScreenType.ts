import { UseMediaQueryResYrlOutType } from '../../../YrlNativeViewLibrary'
import { RootStoreType } from '../../../@types/RootStoreType'

export interface PageChatsWholeScreenPropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResYrlOutType
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
