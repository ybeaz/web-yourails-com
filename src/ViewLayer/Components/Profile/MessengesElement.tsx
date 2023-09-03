import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import { Text } from '../../../ViewLayer/Components/Text/Text'
import { MessengerType } from '../../../@types/MessengerType'

export type MessengesElementPropsType = {
  messengers: MessengerType[]
  style: any
}

/**
 * @description MessengesElement
 * @import import { MessengesElement } from './MessengesElement'
 */

export const MessengesElement: FunctionComponent<MessengesElementPropsType> = ({
  messengers,
  style,
}: MessengesElementPropsType) => (
  <>
    {messengers.map((messenger: MessengerType, index: number) => {
      const { name: messengerName, profileName } = messenger
      return (
        <View
          key={`messenger-${index}`}
          style={[style.messengerView]}
          testID='messengerView'
        >
          <Text style={[style.messengerNameText]} testID='messengerNameText'>
            {messengerName + ' > '}
          </Text>
          <Text style={[style.profilenameText]} testID='profilenameText'>
            {profileName}
          </Text>
        </View>
      )
    })}
  </>
)
