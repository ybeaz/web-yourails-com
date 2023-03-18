export interface TemplateScreenPropsType {
  routeProps: {
    location: {
      pathname: string
    }
  }
  themeDafault: string
}

export interface TemplateScreenType
  extends React.FunctionComponent<TemplateScreenPropsType> {
  (props: TemplateScreenPropsType): React.ReactElement
}
