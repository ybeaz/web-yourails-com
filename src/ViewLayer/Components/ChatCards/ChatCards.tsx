import React, { ReactElement } from 'react'
import { View } from 'react-native'

import {
  urlParamsDefault,
  mediaParamsDefault,
  withParamsMediaYrl,
  withStoreStateYrl,
} from '../../../YrlNativeViewLibrary'
import { ProfileType } from '../../../@types/ProfileType'
import { ChatCardsType } from './ChatCardsTypes'
import { styles } from './ChatCardsStyles'
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

  console.info('ChatCards [59]', { isUserMenu })

  const propsOut: Record<string, any> = {}

  return (
    <View style={[style.ChatCards, styleProps.ChatCards]} testID='ChatCards'>
      {getChatCards(profiles)}
    </View>
  )
}

export const ChatCards = React.memo(
  withStoreStateYrl(withParamsMediaYrl(ChatCardsComponent))
)
