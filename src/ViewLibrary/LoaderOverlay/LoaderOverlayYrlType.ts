/**
 * LoaderOverlayYrlProps Interface
 */
export interface LoaderOverlayYrlPropsType {
  isLoaderOverlayVisible: boolean
}

export interface LoaderOverlayType
  extends React.FunctionComponent<LoaderOverlayYrlPropsType> {
  (props: LoaderOverlayYrlPropsType): React.ReactElement
}