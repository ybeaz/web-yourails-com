import React, { ReactElement } from 'react'
import { View } from 'react-native'

import {
  urlParamsDefault,
  mediaParamsDefault,
  withParamsMediaYrl,
  withStoreStateYrl,
  withPropsYrl,
  ModalFrameYrl,
} from '../../../YrlNativeViewLibrary'
import { ProfileType } from '../../../@types/ProfileType'
import { ChatCardsType, ChatCardsPropsOutType } from './ChatCardsTypes'
import { handleEvents as handleEventsProp } from '../../../DataLayer/index.handleEvents'
import { styles } from './ChatCardsStyles'
import { themes } from '../../Styles/themes'
import { ChatCard } from '../../Components/ChatCard/ChatCard'

/**
 * @import import { ChatCards } from '../Components/ChatCards/ChatCards'
 */
const ChatCardsComponent: ChatCardsType = props => {
  const {
    styleProps = { ChatCards: {} },
    mediaParams = mediaParamsDefault,
    urlParams = urlParamsDefault,
    store,
    handleEvents,
    urlParamsSearch,
  } = props
  const { deviceType } = mediaParams
  const { urlParam1, urlParam2 } = urlParams

  const {
    componentsState: { isUserMenu },
    globalVars: { idProfileHost, idProfileActive },
    profiles,
  } = store

  const style = styles[deviceType]

  const getChatCards = (profilesIn: ProfileType[]): ReactElement[] => {
    const profiles = profilesIn.filter((profile: ProfileType) => {
      const { idProfile } = profile
      return idProfile !== '0' && idProfile !== idProfileHost
    })

    return profiles.map((profile: ProfileType, index: number) => {
      const propsOut: Record<string, any> = {
        chatCardProps: {
          key: `chatCard-${index}`,
          profile,
          isActive: profile.idProfile === idProfileActive,
          urlParam1,
          urlParam2,
          query: {
            s: urlParamsSearch.get('s'),
          },
        },
      }
      return <ChatCard {...propsOut.chatCardProps} />
    })
  }

  const propsOut: ChatCardsPropsOutType = {
    modalFrameYrlProps: {
      styleProps: {
        ModalFrameYrl: {},
        imageBackground: {
          backgroundColor: themes['themeA'].colors07.backgroundColor,
        },
        content: {},
        buttonBackWrapper: {},
        buttonCloseWrapper: {},
      },
      linearGradientColors: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.25)'],
      isShow: isUserMenu,
      isShowImageBackground: true,
      testID: 'ChatSpace_modalFrameYrl',
      buttonBackProps: {
        styleProps: { ButtonYrl: {}, title: {} },
        titleText: '',
        testID: 'ModalFrameYrl-buttonBack',
        disabled: false,
        onPress: () => {},
        iconProps: {
          styleProps: { IconYrl: {} },
          library: 'Ionicons',
          name: 'arrow-back-outline',
          size: 24,
          color: '', // themes['themeA'].colors07.color,
          testID: 'ModalFrameYrl-buttonBack-iconBack',
        },
      },
      buttonCloseProps: {
        styleProps: { ButtonYrl: {}, title: {} },
        titleText: '',
        testID: 'ModalFrameYrl-buttonClose',
        disabled: false,
        onPress: () =>
          handleEvents.SET_MODAL_FRAME(
            {},
            {
              // childName,
              // isShow: false,
              // childProps: {},
            }
          ),
        iconProps: {
          styleProps: { IconYrl: {} },
          library: 'Ionicons',
          name: 'close',
          size: 24,
          color: themes['themeA'].colors07.color,
          testID: 'ModalFrameYrl-buttonClose-iconClose',
        },
      },
      imageBackgroundSource: undefined, // require('../../../Assets/canopy-of-leaves-2.jpg'),
      isButtonBack: false,
      isButtonClose: true,
    },
  }

  return (
    <View style={[style.ChatCards, styleProps.ChatCards]} testID='ChatCards'>
      {!isUserMenu ? (
        getChatCards(profiles)
      ) : (
        <ModalFrameYrl {...propsOut.modalFrameYrlProps}>
          <>123</>
        </ModalFrameYrl>
      )}
    </View>
  )
}

export const ChatCards = React.memo(
  withPropsYrl({ handleEvents: handleEventsProp })(
    withStoreStateYrl(withParamsMediaYrl(ChatCardsComponent))
  )
)
