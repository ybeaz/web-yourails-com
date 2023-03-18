import React, { ReactElement } from 'react'
import { View, Text } from 'react-native'

import { Error404BodyType } from './Error404BodyType'
import { Error404BodyStyle as style } from './Error404BodyStyle'

export const Error404Body: Error404BodyType = () => {
  return (
    <View style={style.Error404Body}>
      <View style={style.content}>
        <Text>Oops!</Text>
        <Text>404 Not Found</Text>
        <Text>Sorry, an error has occured, Requested page not found!</Text>
        <View style={style.actions}>
          <Text>Take Me Home</Text>
          <Text>Contact Support</Text>
        </View>
      </View>
    </View>
  )
}
