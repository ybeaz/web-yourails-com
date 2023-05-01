import React from 'react'
import { View } from 'react-native'

import { ContentMenuMainColumnType } from './ContentMenuMainColumnType'
import { style } from './ContentMenuMainColumnStyle'
import { ButtonYrl } from '../../../YrlNativeViewLibrary'
import { SectionMappingType } from '../../../@types/SectionMappingType'

import { themes } from '../../Styles/themes'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { withPropsYrl } from '../../../YrlNativeViewLibrary'

/**
 * @import import { ContentMenuMainColumn } from '../Components/ContentMenuMainColumn/ContentMenuMainColumn'
 */
const ContentMenuMainColumnComponent: ContentMenuMainColumnType = props => {
  const {
    styleProps = { ContentMenuMainColumn: {}, buttonWrapper: {} },
    sectionsMapping,
    store,
    handleEvents,
  } = props

  const {
    componentsState: {
      modalFrame: { childName: childNameModalStore, isShow: isShowModalStore },
    },
  } = store

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
              size: '1.5rem',
              color: themes['themeA'].colors01.color,
              testID: 'TopBarChatCardsComponent_ButtonYrl_ios-menu',
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
      {getMenuContentItems(sectionsMapping)}
    </View>
  )
}

export const ContentMenuMainColumn = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(
    ContentMenuMainColumnComponent
  )
)
