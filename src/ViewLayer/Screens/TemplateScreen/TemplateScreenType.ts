import { UseMediaQueryResType } from '../../Hooks/useMediaQueryRes'

export interface TemplateScreenPropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResType
  routeProps?: {
    location: {
      pathname: string
    }
  }
  themeDafault?: string
}

export interface TemplateScreenType
  extends React.FunctionComponent<TemplateScreenPropsType> {
  (props: TemplateScreenPropsType): React.ReactElement
}
