import React from 'react'

import {
  ButtonYrl,
  withParamsMediaYrl,
  useLinkClickResYrl,
} from '../../../YrlNativeViewLibrary'
import { themes } from '../../Styles/themes'
import {
  LinkButtonType,
  LinkButtonPropsType,
  LinkButtonPropsOutType,
} from './LinkButtonTypes'

export type { LinkButtonType, LinkButtonPropsType, LinkButtonPropsOutType }

/**
 * @description Component to render
 * @import import { LinkButton } from '../Components/LinkButton/LinkButton'
 */
const LinkButtonComponent: LinkButtonType = ({
  contentSrc,
  content,
}: LinkButtonPropsType) => {
  if (!contentSrc) null
  const propsOut: LinkButtonPropsOutType = {
    qrCodeImageProps: {
      styleProps: {
        ButtonYrl: {},
        title: {
          color: themes['themeA'].colors08.color,
          textDecoration: 'underline',
        },
      },
      titleText: content,
      testID: 'LinkButton',
      disabled: false,
      onPress: useLinkClickResYrl(contentSrc),
      iconProps: undefined,
    },
  }

  return <ButtonYrl {...propsOut.qrCodeImageProps} />
}

export const LinkButton = React.memo(LinkButtonComponent)
