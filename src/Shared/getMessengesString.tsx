import { View } from 'react-native'
import { Text } from '../ViewLayer/Components/Text/Text'
import { MessengerType } from '../@types/ProfileType'

/**
 * @description Function to
 * @import import { getMessengesString } from '../../../Shared/getMessengesString'
 */

export const getMessengesString = (messengers: MessengerType[], style: any) =>
  messengers.map((messenger: MessengerType, index: number) => {
    const { name: messengerName, username } = messenger
    return (
      <View
        key={`messenger-${index}`}
        style={[style.messengerView]}
        testID='messengerView'
      >
        <Text style={[style.messengerNameText]} testID='messengerNameText'>
          {messengerName + ' > '}
        </Text>
        <Text style={[style.usernameText]} testID='usernameText'>
          {username}
        </Text>
      </View>
    )
  })
