import { MediaParamsDefaultType } from '../../../YrlNativeViewLibrary'

export interface TemplateScreenPropsType {
  styleProps?: any
  mediaParams?: MediaParamsDefaultType
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
