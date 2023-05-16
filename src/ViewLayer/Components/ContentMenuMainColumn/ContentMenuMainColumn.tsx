import React from 'react'
import { View } from 'react-native'

import { ProfileType } from '../../../@types/ProfileType'
import { ContentMenuMainColumnType } from './ContentMenuMainColumnType'

import { style } from './ContentMenuMainColumnStyle'
import { SectionMappingType } from '../../../@types/SectionMappingType'

import {
  ButtonYrl,
  withStoreStateYrl,
  withPropsYrl,
  withParamsMediaYrl,
  urlParamsDefault,
} from '../../../YrlNativeViewLibrary'

import { getProfileChat } from '../../../Shared/getProfileChat'
import { getSectionsMappingForProfile } from '../../../Shared/getSectionsMappingForProfile'
import { themes } from '../../Styles/themes'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'

/**
 * @import import { ContentMenuMainColumn } from '../Components/ContentMenuMainColumn/ContentMenuMainColumn'
 */
const ContentMenuMainColumnComponent: ContentMenuMainColumnType = props => {
  const {
    styleProps = { ContentMenuMainColumn: {}, buttonWrapper: {} },
    urlParams = urlParamsDefault,
    store,
    handleEvents,
  } = props

  const { urlParam1, urlParam2 } = urlParams

  const {
    profiles,
    sectionsMapping,
    componentsState: {
      modalFrame: { childName: childNameModalStore, isShow: isShowModalStore },
    },
  } = store

  const profileActive: ProfileType = getProfileChat({
    profiles,
    urlParam1,
    urlParam2,
  })

  const profileNameChat = profileActive ? profileActive.profileName : undefined

  const sectionsMappingForProfile: SectionMappingType[] =
    getSectionsMappingForProfile(sectionsMapping, profileNameChat)

  const getMenuContentItems = (menuContentItemsIn: SectionMappingType[]) => {
    return menuContentItemsIn.map(
      (menuContentItem: SectionMappingType, index: number) => {
        const {
          title,
          pathname,
          iconLibrary,
          iconName,
          iconTitleText,
          childName,
        } = menuContentItem

        const propsOut: Record<string, any> = {
          buttonProps: {
            styleProps: {
              ButtonYrl: {
                cursor: 'pointer',
              },
              title: {
                paddingLeft: '0.5rem',
              },
            },
            titleText: iconTitleText,
            testID: 'ButtonYrl',
            disabled: false,
            onPress: (event: any) =>
              handleEvents.SET_MODAL_FRAME(event, {
                childName,
                isShow: true,
                pathname,
                childProps: { title },
              }),
            iconProps: {
              library: iconLibrary,
              name: iconName,
              size: 24,
              color: themes['themeA'].colors01.color,
              testID: 'TopBarChatCardsComponent_ButtonYrl_menu',
            },
          },
        }

        const styleForActiveMenuItem =
          childNameModalStore === childName && isShowModalStore
            ? { backgroundColor: themes['themeA'].colors03.backgroundColor }
            : {}

        return (
          <View
            key={`menuContentItem-${index}`}
            style={[
              style.buttonWrapper,
              styleProps.buttonWrapper,
              styleForActiveMenuItem,
            ]}
            testID='buttonWrapper'
          >
            <ButtonYrl {...propsOut.buttonProps} />
          </View>
        )
      }
    )
  }

  const propsOut: Record<string, any> = {}

  return (
    <View
      style={[style.ContentMenuMainColumn, styleProps.ContentMenuMainColumn]}
      testID='ContentMenuMainColumn'
    >
      {getMenuContentItems(sectionsMappingForProfile)}
    </View>
  )
}

export const ContentMenuMainColumn = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(
    withStoreStateYrl(withParamsMediaYrl(ContentMenuMainColumnComponent))
  )
)
