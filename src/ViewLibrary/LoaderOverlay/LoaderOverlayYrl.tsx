import React from 'react'
import { View } from 'react-native'

import { LoaderOverlayYrlStyle } from './LoaderOverlayYrlStyle'
import { LoaderOverlayType } from './LoaderOverlayYrlType'

/**
 * @import import { LoaderOverlayYrl } from './ViewLibrary/LoaderOverlay/LoaderOverlay'
 * @import import { LoaderOverlayPropsType } from './ViewLibrary/LoaderOverlay/LoaderOverlayType'
 */
const LoaderOverlayYrl: LoaderOverlayType = props => {
  const {
    isLoaderOverlayVisible,
    propsStyle = { LoaderOverlay: {}, spinner: {} },
    testID = 'LoaderOverlayYrl',
  } = props

  return (
    <View
      style={[LoaderOverlayYrlStyle.LoaderOverlay, propsStyle.LoaderOverlay]}
      testID={testID}
    >
      <View
        style={[LoaderOverlayYrlStyle.spinner, propsStyle.spinner]}
        testID={`${testID}_View`}
      ></View>
    </View>
  )
}

export default LoaderOverlayYrl
