// import { History } from 'history'

import { UseMediaQueryResYrlOutType } from '../../../YrlNativeViewLibrary'
import { RootStoreType } from '../../../@types/RootStoreType'

export interface PageChatsWholeScreenPropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResYrlOutType
  urlParams: any
  urlParamsSearch: any
  routeProps?: any
  // {
  //   location: {
  //     pathname: string
  //     hash: string
  //   }
  // }
  themeDafault?: string
  store: RootStoreType
  history?: History
}

export interface PageChatsWholeScreenType
  extends React.FunctionComponent<PageChatsWholeScreenPropsType> {
  (props: PageChatsWholeScreenPropsType): React.ReactElement
}
