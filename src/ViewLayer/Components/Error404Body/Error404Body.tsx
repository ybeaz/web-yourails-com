import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import { Error404BodyType } from './Error404BodyType'
import { Error404BodyStyle as style } from './Error404BodyStyle'

const Error404BodyComponent: Error404BodyType = () => {
  return (
    <SafeAreaView style={style.Error404Body}>
      <SafeAreaView style={style.content}>
        <Text>Oops!</Text>
        <Text>404 Not Found</Text>
        <Text>Sorry, an error has occured, Requested page not found!</Text>
        <SafeAreaView style={style.actions}>
          <Text>Take Me Home</Text>
          <Text>Contact Support</Text>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  )
}

export const Error404Body = React.memo(Error404BodyComponent)
