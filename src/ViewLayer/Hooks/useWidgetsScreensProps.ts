import React, { useState, useEffect, useRef } from 'react'

import { PageChatsWholeScreenPropsOutType } from '../Screens/PageChatsWholeScreen/PageChatsWholeScreen'
import { SectionMappingType } from '../../@types/SectionMappingType'
import { ProfileType } from '../../@types/GraphqlTypes'

import {
  mediaParamsDefault,
  urlParamsDefault,
} from '../../YrlNativeViewLibrary'

import { themes } from '../Styles/themes'
import { getSocketOnConversation } from '../../CommunicationLayer/socketio/getSocketOnConversation'
import { getSocketDisconnected } from '../../CommunicationLayer/socketio/getSocketDisconnected'
import { getSocketOnMessage } from '../../CommunicationLayer/socketio/getSocketOnMessage'
import { getSocketOnPending } from '../../CommunicationLayer/socketio/getSocketOnPending'
import { getProfileByIdProfile } from '../../Shared/getProfileByIdProfile'
import { getSectionsMappingForProfile } from '../../Shared/getSectionsMappingForProfile'

export type useWidgetsScreensPropsPropsType = Record<string, any>

export interface useWidgetsScreensPropsType {
  (props: useWidgetsScreensPropsPropsType): PageChatsWholeScreenPropsOutType
}

/**
 * @description React hook to provide
 * @import import { useWidgetsScreensProps } from '../../Hooks/useWidgetsScreensProps'
 */

export const useWidgetsScreensProps: useWidgetsScreensPropsType = (
  props: any
) => {
  const {
    styles,
    mediaParams = mediaParamsDefault,
    urlParams = urlParamsDefault,
    platformOS,
    urlParamsSearch,
    handleEvents,
    storeStateSlice,
    onLayout,
    navigation,
  } = props
  const { deviceType } = mediaParams
  const { urlParam1, urlParam2, urlParam3 } = urlParams

  const style = styles[deviceType]

  const renderCounter = useRef(0)

  const {
    idProfileActive,
    isLeftColumn,
    isMainColumn,
    isMainColumnBlank,
    modalFrame,
    profiles,
    sectionsMapping,
  } = storeStateSlice

  const { isShow: isShowModalFrame } = modalFrame

  const query =
    platformOS === 'web'
      ? {
          s: urlParamsSearch.get('s'),
          code: urlParamsSearch.get('code'),
        }
      : {}

  const profileActive: ProfileType = getProfileByIdProfile(
    profiles,
    idProfileActive
  )

  const profileNameChat = profileActive ? profileActive.profileName : undefined

  const sectionsMappingForProfile: SectionMappingType[] =
    getSectionsMappingForProfile(sectionsMapping, profileNameChat)

  const urlParamsMediaIdentifier = JSON.stringify({
    urlParam1,
    urlParam2,
    urlParam3,
    deviceType,
    sectionsMappingForProfile,
    profilesLen: profiles.length,
  })

  useEffect(() => {
    if (renderCounter.current === 0) {
      /** @description Add socket.io listeners **/
      getSocketOnConversation()
      getSocketOnMessage()
      getSocketOnPending()

      /** @description Obtaining a user data, loading profiles, messages, etc. as a first step. **/
      handleEvents.INIT_LOADING({}, { query })

      /** @description Add the 'beforeunload' event listener to gracefully disconnect when reloading the page */
      if (platformOS === 'web')
        window.addEventListener('beforeunload', getSocketDisconnected)
    }

    renderCounter.current = renderCounter.current + 1

    /** @description Clean up the event listener when the component unmounts */
    return () => {
      if (platformOS === 'web')
        window.removeEventListener('beforeunload', getSocketDisconnected)
    }
  }, [])

  useEffect(() => {
    if (platformOS === 'web')
      handleEvents.SET_STORE_SCENARIO_WEB(
        {},
        {
          urlParam1,
          urlParam2,
          urlParam3,
          query,
          deviceType,
          sectionsMappingForProfile,
        }
      )
    else handleEvents.SET_STORE_SCENARIO_MOBILE({}, { navigation })
  }, [urlParamsMediaIdentifier])

  const layoutOfRowProps = {
    isLeftColumn,
    isMainColumn,
    styleProps: {
      LayoutOfRow: style.layoutOfRow,
    },
  }

  const propsOut: PageChatsWholeScreenPropsOutType = {
    style,
    themes,
    layoutScreenProps: {
      styleProps: {
        LayoutScreen: {},
        layoutNavigationTop: {
          height: sectionsMappingForProfile.length ? '6rem' : '4rem',
        },
        layoutMainContent: {
          top: sectionsMappingForProfile.length ? '6rem' : '4rem',
          bottom: isShowModalFrame ? 0 : '4rem',
        },
        layoutNavigationBottom: { height: '6rem' },
      },
      isActive: profiles.length ? true : false,
      onLayout,
    },
    layoutOfRowNavigationTopProps: {
      ...layoutOfRowProps,
      styleProps: {
        LayoutOfRow: {
          ...layoutOfRowProps.styleProps.LayoutOfRow,
        },
        leftColumn: {
          borderStyle: 'solid',
          // borderTopWidth: 1,
          borderRightWidth: isMainColumnBlank ? 1 : 0,
          // borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderColor: themes['themeA'].colors01.borderColor,
        },
        mainColumn: {
          borderStyle: 'solid',
          // borderTopWidth: 1,
          borderRightWidth: 1,
          // borderBottomWidth: 1,
          // borderLeftWidth: 1,
          borderColor: themes['themeA'].colors01.borderColor,
        },
      },
    },
    layoutOfRowMainContentProps: {
      ...layoutOfRowProps,
      styleProps: {
        LayoutOfRow: {
          ...layoutOfRowProps.styleProps.LayoutOfRow,
        },
        leftColumn: {
          borderStyle: 'solid',
          // borderTopWidth: 1,
          // borderRightWidth: 1,
          // borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderColor: themes['themeA'].colors01.borderColor,
        },
        mainColumn: {
          borderStyle: 'solid',
          borderTopWidth:
            !isMainColumnBlank && sectionsMappingForProfile.length ? 1 : 0,
          borderRightWidth: 1,
          // borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderColor: themes['themeA'].colors01.borderColor,
        },
      },
    },
    layoutOfRowNavigationBottomProps: {
      ...layoutOfRowProps,
      styleProps: {
        LayoutOfRow: {
          ...layoutOfRowProps.styleProps.LayoutOfRow,
        },
        leftColumn: {
          borderStyle: 'solid',
          // borderTopWidth: 1,
          // borderRightWidth: 1,
          // borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderColor: themes['themeA'].colors01.borderColor,
        },
        mainColumn: {
          borderStyle: 'solid',
          // borderTopWidth: 1,
          borderRightWidth: 1,
          // borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderColor: themes['themeA'].colors01.borderColor,
        },
      },
    },
    mainColumnContentMenuProps: {
      styleProps: {
        ContentMenuMainColumn: {},
        buttonWrapper: {
          borderTopWidth: 0,
          borderRightWidth: 0,
          borderBottomWidth: 0,
          borderLeftWidth: 1,
          borderTopColor: themes['themeA'].colors01.borderColor,
          borderRightColor: themes['themeA'].colors01.borderColor,
          borderBottomColor: themes['themeA'].colors01.borderColor,
          borderLeftColor: themes['themeA'].colors01.borderColor,
        },
      },
    },
    isShowModalFrame,
    isMainColumnBlank,
    sectionsMappingForProfile,
  }

  return propsOut
}
