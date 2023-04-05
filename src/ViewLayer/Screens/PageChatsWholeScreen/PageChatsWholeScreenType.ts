import { UseMediaQueryResType } from '../../Hooks/useMediaQueryRes'

export interface PageChatsWholeScreenPropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResType
  routeProps?: {
    location: {
      pathname: string
    }
  }
  themeDafault?: string
}

export interface PageChatsWholeScreenType
  extends React.FunctionComponent<PageChatsWholeScreenPropsType> {
  (props: PageChatsWholeScreenPropsType): React.ReactElement
}
