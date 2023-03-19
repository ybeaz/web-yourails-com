/**
 * LoaderOverlayYrlProps Interface
 */
export interface LoaderOverlayYrlPropsType {
  isLoaderOverlayVisible: boolean
  propsStyle: { LoaderOverlay: any; spinner: any }
  testID: string
}

export interface LoaderOverlayType
  extends React.FunctionComponent<LoaderOverlayYrlPropsType> {
  (props: LoaderOverlayYrlPropsType): React.ReactElement
}
