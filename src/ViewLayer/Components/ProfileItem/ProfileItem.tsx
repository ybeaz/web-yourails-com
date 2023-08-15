import React, { ReactElement, ReactNode } from 'react'
import { View, ImageResizeMode } from 'react-native'
import ReadMore from 'react-native-read-more-text'

import { useLinkClickResYrl } from '../../../YrlNativeViewLibrary'
import { ButtonYrl } from '../../../YrlNativeViewLibrary'
import { IconYrl } from '../../../YrlNativeViewLibrary'
import { Text } from '../../Components/Text/Text'
import { ProfileItemType } from './ProfileItemType'
import { style } from './ProfileItemStyle'
import { ImageYrl } from '../../../YrlNativeViewLibrary'
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
      size: 24,
      color: themes['themeA'].colors01.color,
      testID: `${label.toLowerCase()}_IconYrl_ios_send`,
    },
    readMoreComponent: {
      numberOfLines: 4,
      testID: 'readMoreComponent',
    },
    readMoreLink: {
      style: { ...style.readMoreLess, color: themes['themeA'].colors08.color },
      testID: 'readMoreLink',
    },
    readLessLink: {
      style: { ...style.readMoreLess, color: themes['themeA'].colors08.color },
      testID: 'readLessLink',
    },
  }

  const handlers: Record<string, (handlePress: () => void) => ReactNode> = {
    renderTruncatedFooter(handlePress) {
      return (
        <Text {...propsOut.readMoreLink} onPress={handlePress}>
          Read more
        </Text>
      )
    },
    renderRevealedFooter(handlePress) {
      return (
        <Text {...propsOut.readLessLink} onPress={handlePress}>
          Show less
        </Text>
      )
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
        onPress: useLinkClickResYrl(contentSrc),
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
        <ReadMore
          {...propsOut.readMoreComponent}
          renderTruncatedFooter={handlers.renderTruncatedFooter}
          renderRevealedFooter={handlers.renderRevealedFooter}
          onReady={() => {}}
        >
          <Text style={[style.content]}>{contentEntity}</Text>
        </ReadMore>
        <Text style={[style.label, { color: themes['themeA'].colors05.color }]}>
          {label}
        </Text>
      </View>
    </View>
  )
}

export const ProfileItem = React.memo(ProfileItemComponent)
