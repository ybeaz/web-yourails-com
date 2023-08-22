import { ReactElement } from 'react'
import { ButtonYrlPropsType } from '../../../YrlNativeViewLibrary'
export type LinkButtonPropsType = {
  contentSrc?: string
  content: any
}

export type LinkButtonPropsOutType = {
  qrCodeImageProps: ButtonYrlPropsType
}

/**
 * @import import { LinkButtonType } from './LinkButtonType'
 */
export interface LinkButtonType
  extends React.FunctionComponent<LinkButtonPropsType> {
  (props: LinkButtonPropsType): ReactElement
}
