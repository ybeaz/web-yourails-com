import { UseMediaQueryResYrlOutType } from '../../../YrlNativeViewLibrary'

export interface TemplateScreenPropsType {
  styleProps?: any
  mediaParams?: UseMediaQueryResYrlOutType
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
