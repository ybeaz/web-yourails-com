import React, { ReactElement } from 'react'
import { View, ImageResizeMode } from 'react-native'

import { useLinkClickRes } from '../../Hooks/useLinkClickRes'
import { ButtonYrl } from '../../../YrlNativeViewLibrary/ButtonYrl/ButtonYrl'
import { IconYrl } from '../../../YrlNativeViewLibrary/IconYrl/IconYrl'
import { Text } from '../../Components/Text/Text'
import { ProfileItemType } from './ProfileItemType'
import { style } from './ProfileItemStyle'
import { ImageYrl } from '../../../YrlNativeViewLibrary/ImageYrl/ImageYrl'
import { themes } from '../../Styles/themes'

// const styleInvisible =

/**
 * @import import { ProfileItem } from '../Components/ProfileItem/ProfileItem'
 */
const ProfileItemComponent: ProfileItemType = props => {
  const {
    styleProps = { ProfileItem: {} },
    iconLibrary,
    iconName,
    contentType,
    contentSrc,
    content,
    label,
  } = props

  const propsOut: Record<string, any> = {
    iconPhoneProps: {
      library: iconLibrary,
      name: iconName,
      styleProps: { IconYrl: { cursor: 'pointer' } },
      size: '1.5rem',
      color: themes['themeA'].colors01.color,
      testID: `${label.toLowerCase()}_IconYrl_ios_send`,
    },
  }

  const ContentImage = ({
    contentSrc,
  }: {
    contentSrc?: string
  }): ReactElement => {
    if (!contentSrc) null
    const resizeMode: ImageResizeMode = 'cover'
    const propsOut: Record<string, any> = {
      qrCodeImageProps: {
        styleProps: {
          ImageYrl: {},
          image: { width: '12rem', height: '12rem' },
        },
        testID: 'ImageYrl',
        uri: contentSrc,
        resizeMode: resizeMode, // 'cover' | 'contain' | 'stretch' | 'repeat' | 'center'
      },
    }

    return <ImageYrl {...propsOut.qrCodeImageProps} />
  }

  const LinkButton = ({
    contentSrc,
    content,
  }: {
    contentSrc?: string
    content: any
  }): ReactElement => {
    if (!contentSrc) null
    const propsOut: Record<string, any> = {
      qrCodeImageProps: {
        styleProps: {
          ButtonYrl: {},
          title: {
            color: themes['themeA'].colors08.color,
            textDecoration: 'underline',
          },
        },
        titleText: content,
        testID: 'tooltip_buttonYrl',
        disabled: false,
        onPress: useLinkClickRes(contentSrc),
        iconProps: undefined,
      },
    }

    return <ButtonYrl {...propsOut.qrCodeImageProps} />
  }

  let contentEntity: string | ReactElement = content as string
  if (contentType === 'imageSrc' && typeof content === 'string')
    contentEntity = (<ContentImage contentSrc={contentSrc} />) as ReactElement
  else if (contentType === 'linkHref' && typeof content === 'string')
    contentEntity = (
      <LinkButton contentSrc={contentSrc} content={content} />
    ) as ReactElement

  return (
    <View style={[style.rowView]} testID='rowView'>
      <View style={[style.column1]} testID='column1'>
        {iconLibrary && iconName && <IconYrl {...propsOut.iconPhoneProps} />}
      </View>

      <View style={[style.column2]} testID='column2'>
        <Text style={[style.content]}>{contentEntity}</Text>
        <Text style={[style.label, { color: themes['themeA'].colors05.color }]}>
          {label}
        </Text>
      </View>
    </View>
  )
}

export const ProfileItem = React.memo(ProfileItemComponent)
